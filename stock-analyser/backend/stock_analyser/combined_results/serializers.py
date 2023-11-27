from rest_framework import serializers
from .models import CombinedResultsModel
from trends.serializers import TrendsSerializer
from financials.serializers import FinancialsSerializer
from stock_prices.serializers import StockPriceSerializer


class CombinedResultsSerializer(serializers.ModelSerializer):
    date = serializers.DateTimeField()
    asxCode = serializers.CharField(source='asx_code')
    companyName = serializers.CharField(source='company_name')
    financials = FinancialsSerializer()
    trends = TrendsSerializer()
    stockPrices = StockPriceSerializer(source='stock_prices')

    def create(self, validated_data):
        return CombinedResultsModel(**validated_data)

    class Meta:
        model = CombinedResultsModel
        fields = ('date', 'asxCode', 'companyName', 'financials', 'trends', 'stockPrices')

class TotalResultsSerializer(serializers.ModelSerializer):
    results = CombinedResultsSerializer(many=True)