from rest_framework import viewsets

from api.models.Position import Position
from api.serializers.PositionSerializer import PositionSerializer


class PositionViewSet(viewsets.ModelViewSet):
    queryset = Position.objects.all()
    serializer_class = PositionSerializer
