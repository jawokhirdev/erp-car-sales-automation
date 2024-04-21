from rest_framework import viewsets

from api.models.FuelType import FuelType
from api.serializers.FuelTypeSerializer import FuelTypeSerializer


class FuelTypeViewSet(viewsets.ModelViewSet):
    queryset = FuelType.objects.all()
    serializer_class = FuelTypeSerializer
