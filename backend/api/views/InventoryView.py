from rest_framework import viewsets

from api.models.Inventory import Inventory
from api.serializers.InventorySerializer import InventorySerializer


class InventoryViewSet(viewsets.ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
