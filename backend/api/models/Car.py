from django.db import models

from api.models.CarType import CarType
from api.models.Color import Color
from api.models.FuelType import FuelType
from api.models.Make import Make


class Car(models.Model):
    name = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    make = models.ForeignKey(Make, on_delete=models.SET_NULL, null=True)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    engine_size = models.CharField(max_length=100)
    fuel_type = models.ForeignKey(FuelType, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(upload_to='cars/')
    color = models.ForeignKey(Color, on_delete=models.SET_NULL, null=True)
    type = models.ForeignKey(CarType, on_delete=models.SET_NULL, null=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.make} - {self.model}'
