from django.db import models

from api.models.Region import Region


# Create your models here.
class Customer(models.Model):

    GENDER_CHOICES = (
        ('male', 'Erkak'),
        ('female', 'Ayol'),
    )

    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    middle_name = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=50)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    date_of_birth = models.DateField()
    passport = models.CharField(max_length=50)
    pnfl = models.BigIntegerField(default=0)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def get_full_name(self):
        return f"{self.first_name} {self.last_name} {self.middle_name}"

    def get_pnfl(self):
        return self.pnfl

    def get_passport(self):
        return self.passport

    def __str__(self):
        return self.get_full_name()
