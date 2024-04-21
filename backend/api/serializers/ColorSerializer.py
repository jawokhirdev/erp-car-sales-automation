from rest_framework import serializers

from api.models.Color import Color


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ['id', 'name', 'created_at', 'updated_at']
