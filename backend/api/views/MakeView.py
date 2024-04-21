from rest_framework import viewsets

from api.models.Make import Make
from api.serializers.MakeSerializer import MakeSerializer


class MakeViewSet(viewsets.ModelViewSet):
    queryset = Make.objects.all()
    serializer_class = MakeSerializer
