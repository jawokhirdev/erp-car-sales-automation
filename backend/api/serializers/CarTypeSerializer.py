from rest_framework import serializers
from api.models.CarType import CarType


class CarTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarType
        fields = ['id', 'name', 'created_at', 'updated_at']
