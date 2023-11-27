from rest_framework import serializers

from .models import PriceModel, StockPriceModel

class PriceSerializer(serializers.ModelSerializer):
    date = serializers.CharField()
    close = serializers.CharField()

    def create(self, validated_data):
        return PriceModel(**validated_data)

    class Meta:
        model = PriceModel
        fields = ('date', 'close')

class StockPriceSerializer(serializers.ModelSerializer):
    asxCode = serializers.CharField(source='asx_code')
    stockPrices = PriceSerializer(source='stock_prices', many=True)

    def create(self, validated_data):
        return StockPriceModel(**validated_data)

    class Meta:
        model = StockPriceModel
        fields = ('asxCode', 'stockPrices')

