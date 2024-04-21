from django.contrib.auth.models import User
from django.db import models

from api.models.Branch import Branch
from api.models.Car import Car


class Transfer(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    amount = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.car} - {self.quantity} ta"
