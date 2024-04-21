from rest_framework import serializers

from api.models.FuelType import FuelType


class FuelTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FuelType
        fields = '__all__'  # Serialize all fields of the FuelType model
