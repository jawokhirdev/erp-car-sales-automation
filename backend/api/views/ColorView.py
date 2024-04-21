from rest_framework import viewsets
from rest_framework import permissions

from api.models.Color import Color
from api.serializers.ColorSerializer import ColorSerializer


class ColorViewSet(viewsets.ModelViewSet):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer
    permission_classes = [permissions.AllowAny]  # Adjust permissions as needed
