from django.db import models


class Branch(models.Model):
    class RegionChoices(models.TextChoices):
        ANDIJAN = 'Andijon', 'Andijon'
        BUKHARA = 'Buxoro', 'Buxoro'
        FERGHANA = 'Fargʻona', 'Fargʻona'
        JIZZAK = 'Jizzax', 'Jizzax'
        KARAKALPAKSTAN = 'Qoraqalpogʻiston', 'Qoraqalpogʻiston'
        NAMANGAN = 'Namangan', 'Namangan'
        NAVOI = 'Navoiy', 'Navoiy'
        SAMARKAND = 'Samarqand', 'Samarqand'
        SIRDARYA = 'Sirdaryo', 'Sirdaryo'
        SURKHANDARYA = 'Surxondaryo', 'Surxondaryo'
        TASHKENT_CITY = 'Toshkent shahri', 'Toshkent shahri'
        TASHKENT_REGION = 'Toshkent viloyati', 'Toshkent viloyati'
        KHOREZM = 'Xorazm', 'Xorazm'

    name = models.CharField(max_length=100)
    capacity = models.IntegerField()
    region = models.CharField(max_length=50, choices=RegionChoices.choices)
    address = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def get_capacity(self):
        return self.capacity

    def get_region(self):
        return self.region

    def get_address(self):
        return self.address

    def __str__(self):
        return self.name



