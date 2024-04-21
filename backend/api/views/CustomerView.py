from rest_framework import viewsets

from api.models.Customer import Customer
from api.serializers.CustomerSerializer import CustomerSerializer


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
