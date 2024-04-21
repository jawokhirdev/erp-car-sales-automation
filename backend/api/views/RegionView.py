from rest_framework import viewsets

from api.models.Region import Region
from api.serializers.RegionSerializer import RegionSerializer


class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer
