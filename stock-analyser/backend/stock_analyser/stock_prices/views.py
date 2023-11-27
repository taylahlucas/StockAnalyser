import datetime
import yfinance as yf
from django.forms import model_to_dict

from .models import PriceModel, StockPriceModel

def get_stocks(asxCompanies):
    current_date = datetime.date.today()
    start_date = datetime.date(current_date.year - 3, current_date.month, current_date.day)

    for company in asxCompanies:
        stocks = yf.Ticker(company).history(start=start_date, end=current_date)
        stocks.index = [d.date() for d in stocks.index]

        stock_results = []
        for date in stocks.index:
            stock_price = PriceModel.objects.create(
                asx_code=company,
                date=date.strftime("%Y-%m-%d"),
                close=stocks['Close'][date]
            )
            stock_results.append(stock_price)

        company_stocks = StockPriceModel.objects.create(asx_code=company)
        company_stocks.stock_prices.set(stock_results)
        company_stocks.save()

    print("RETURNING STOCKS: ", StockPriceModel.objects.all().filter(asx_code__in=asxCompanies))
    return StockPriceModel.objects.all().filter(asx_code__in=asxCompanies)