from rest_framework import serializers
from api.models.Car import Car
from api.models.Branch import Branch
from users.models import User
from api.models.Transfer import Transfer


class TransferSerializer(serializers.ModelSerializer):
    car = serializers.PrimaryKeyRelatedField(queryset=Car.objects.all)
    branch = serializers.PrimaryKeyRelatedField(queryset=Branch.objects.all)
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all)

    class Meta:
        model = Transfer
        fields = '__all__'
