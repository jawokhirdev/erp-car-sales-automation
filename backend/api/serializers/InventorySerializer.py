from rest_framework import serializers

from api.models.Inventory import Inventory


class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = '__all__'  # Serialize all fields of the Inventory model
