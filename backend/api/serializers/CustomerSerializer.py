from rest_framework import serializers

from api.models.Customer import Customer


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'  # Serialize all fields of the Customer model
