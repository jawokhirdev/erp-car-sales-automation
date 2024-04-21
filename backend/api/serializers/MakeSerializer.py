from rest_framework import serializers

from api.models.Make import Make


class MakeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Make
        fields = '__all__'  # Serialize all fields of the Make model
