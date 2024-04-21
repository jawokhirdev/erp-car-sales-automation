from rest_framework import viewsets
from api.models.Car import Car
from api.models.Branch import Branch
from users.models import User
from api.models.Transfer import Transfer
from api.serializers.TransferSerializer import TransferSerializer


class TransferViewSet(viewsets.ModelViewSet):
    queryset = Transfer.objects.all()
    serializer_class = TransferSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['car_queryset'] = Car.objects.all()
        context['branch_queryset'] = Branch.objects.all()
        context['user_queryset'] = User.objects.all()
        return context
