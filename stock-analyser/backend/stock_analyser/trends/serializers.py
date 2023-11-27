from rest_framework import serializers
from .models import TrendsModel, TrendItemModel

class TrendItemSerializer(serializers.ModelSerializer):
    type = serializers.CharField()
    year = serializers.IntegerField()
    value = serializers.CharField()

    def create(self, validated_data):
        return TrendItemModel(**validated_data)

    class Meta:
        model = TrendItemModel
        fields = ('type', 'year', 'value')


class TrendsSerializer(serializers.ModelSerializer):
    revenueTrend = TrendItemSerializer(source='revenue_trend', many=True)
    expensesTrend = TrendItemSerializer(source='expenses_trend', many=True)
    epsTrend = TrendItemSerializer(source='eps_trend', many=True)

    def create(self, validated_data):
        return TrendsModel(**validated_data)

    class Meta:
        model = TrendsModel
        fields = ('revenueTrend', 'expensesTrend', 'epsTrend')