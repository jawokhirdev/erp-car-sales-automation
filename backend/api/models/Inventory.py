from django.db import models

from api.models.Supplier import Supplier
from api.models.Branch import Branch
from api.models.Car import Car


class Inventory(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

