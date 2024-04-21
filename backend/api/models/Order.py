import uuid

from django.contrib.auth.models import User
from django.db import models

from api.models.Car import Car
from api.models.Customer import Customer


class Order(models.Model):
    class StatusChoices(models.TextChoices):
        PENDING = 'pending', 'Pending'
        PROCESSING = 'processing', 'Processing'
        COMPLETED = 'completed', 'Completed'
        CANCELED = 'canceled', 'Canceled'

    class PaymentType(models.TextChoices):
        CARD = 'card', 'Naqd'
        CASH = 'cash', 'Plastik karta'
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    car = models.OneToOneField(Car, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    total_price = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=StatusChoices.choices, default=StatusChoices.PENDING)
    payment_type = models.CharField(max_length=20, choices=PaymentType.choices)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.customer} - {self.car}'