from rest_framework import viewsets
from rest_framework import permissions

from api.models.Car import Car
from api.serializers.CarSerializer import CarSerializer


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [permissions.AllowAny]