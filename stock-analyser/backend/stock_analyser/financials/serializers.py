from rest_framework import serializers
from .models import FinancialsModel

class FinancialsSerializer(serializers.ModelSerializer):
    currentStockPrice = serializers.CharField(source='current_stock_price')
    enterpriseValue = serializers.CharField(source='ev')
    ebitda = serializers.CharField()
    bookValue = serializers.CharField(source='bv')
    eps = serializers.CharField()
    dilutedEPS = serializers.CharField(source='diluted_eps')
    trailingPE = serializers.CharField(source='trailing_pe')
    evRevenue = serializers.CharField(source='ev_revenue')
    evEbitda = serializers.CharField(source='ev_ebitda')

    priceToBook = serializers.CharField(source='price_to_book')
    priceToSales = serializers.CharField(source='price_to_sales')

    profitMargin = serializers.CharField(source='profit_margin')
    operatingMargin = serializers.CharField(source='operating_margin')

    operatingCashFlow = serializers.CharField(source='operating_cash_flow')
    leveredCashFlow = serializers.CharField(source='levered_cash_flow')
    returnOnEquity = serializers.CharField(source='return_on_equity')
    debtEquity = serializers.CharField(source='debt_equity')
    dividendPayout = serializers.CharField(source='dividend_payout')

    def create(self, validated_data):
        return FinancialsModel(**validated_data)

    class Meta:
        model = FinancialsModel
        fields = ('currentStockPrice', 'enterpriseValue', 'ebitda', 'bookValue', 'eps', 'dilutedEPS', 'trailingPE', 'evRevenue', 'evEbitda', 'priceToBook', 'priceToSales', 'profitMargin', 'operatingMargin', 'operatingCashFlow', 'leveredCashFlow', 'returnOnEquity', 'debtEquity', 'dividendPayout')