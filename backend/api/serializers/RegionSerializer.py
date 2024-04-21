from rest_framework import serializers

from api.models.Region import Region


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__'  # Serialize all fields of the Region model
