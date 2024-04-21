from rest_framework import viewsets
from rest_framework import permissions

from api.models.CarType import CarType
from api.serializers.CarTypeSerializer import CarTypeSerializer


class CarTypeViewSet(viewsets.ModelViewSet):
    queryset = CarType.objects.all()
    serializer_class = CarTypeSerializer
    permission_classes = [permissions.AllowAny]  # Adjust permissions as needed
