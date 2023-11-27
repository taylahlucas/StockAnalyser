from rest_framework import serializers
from .models import AsxCompanyModel

class AsxCompanySerializer(serializers.ModelSerializer):
    date = serializers.CharField()
    name = serializers.CharField()
    asxCode = serializers.CharField(source='asx_code')
    parentSector = serializers.CharField(source='parent_sector')
    sector = serializers.CharField()

    def create(self, validated_data):
        return AsxCompanyModel(**validated_data)

    class Meta:
        model = AsxCompanyModel
        fields = ('date', 'name', 'asxCode', 'parentSector', 'sector')