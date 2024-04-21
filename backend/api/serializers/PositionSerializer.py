from rest_framework import serializers

from api.models.Position import Position


class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = '__all__'  # Serialize all fields of the Position model
