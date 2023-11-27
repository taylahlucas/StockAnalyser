from django.core.exceptions import ValidationError
from django.forms import model_to_dict
from rest_framework import permissions, viewsets, mixins
from rest_framework.response import Response
import datetime
import pytz

from .models import CombinedResultsModel
from .serializers import CombinedResultsSerializer
import financials.views as FinancialsView
from financials.models import FinancialsModel
import trends.views as TrendsView
from trends.models import TrendsModel, TrendItemModel
from stock_prices.models import PriceModel, StockPriceModel
import stock_prices.views as StockPriceView


class CombinedResultsView(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet
):
    serializer_class = CombinedResultsSerializer

    def create(self, request, *args, **kwargs):
        # PriceModel.objects.all().delete()
        # StockPriceModel.objects.all().delete()
        # FinancialsModel.objects.all().delete()
        # TrendItemModel.objects.all().delete()
        # TrendsModel.objects.all().delete()
        # CombinedResultsModel.objects.all().delete()

        utc = pytz.UTC
        asxCompanies = request.data['companyNames']

        # For each asxCompany check if it exists in company models and only scrape if its > 12 hours
        updatedCompanies = []
        for company in asxCompanies:
            existing_company = CombinedResultsModel.objects.all().filter(asx_code=company)
            if existing_company:
                rolloverTime = datetime.datetime.now().replace(hour=8, minute=0, second=0, microsecond=0)
                if existing_company[0].date < utc.localize(rolloverTime):
                    # Delete existing data and update
                    StockPriceModel.objects.all().filter(asx_code=company).delete()
                    PriceModel.objects.all().filter(asx_code=company).delete()
                    FinancialsModel.objects.all().filter(asx_code=company).delete()
                    TrendItemModel.objects.all().filter(asx_code=company).delete()
                    TrendsModel.objects.all().filter(asx_code=company).delete()
                    CombinedResultsModel.objects.all().filter(asx_code=company).delete()
                    updatedCompanies.append(company)
            else:
                # Company data does not exist yet
                updatedCompanies.append(company)

        trends = TrendsView.get_trends(updatedCompanies)
        financials = FinancialsView.get_financials(updatedCompanies)
        stock_prices = StockPriceView.get_stocks(updatedCompanies)

        for company in asxCompanies:
            company_name = company
            financials_result = []
            try:
                financials_result = financials.filter(asx_code=company)[0]
                company_name = financials_result.company_name
            except IndexError:
                break
            trends_result = []
            try:
                trends_result = trends.filter(asx_code=company)[0]
            except IndexError:
                break

            stock_price_result = []
            try:
                stock_price_result = stock_prices.filter(asx_code=company)[0]
            except IndexError:
                break
            try:
                result = CombinedResultsModel.objects.create(
                    asx_code=company,
                    company_name=company_name,
                    financials=financials_result,
                    trends=trends_result,
                    stock_prices=stock_price_result
                )
            except ValidationError:
                result = CombinedResultsModel.objects.create(
                    asx_code=company
                )
            result.save()

        results = CombinedResultsModel.objects.all().filter(asx_code__in=asxCompanies)
        serializer = CombinedResultsSerializer(results, many=True)
        return Response(status=200, data=serializer.data)


# PriceModel.objects.all().delete()
# StockPriceModel.objects.all().delete()
# FinancialsModel.objects.all().delete()
# TrendItemModel.objects.all().delete()
# TrendsModel.objects.all().delete()
# CombinedResultsModel.objects.all().delete()