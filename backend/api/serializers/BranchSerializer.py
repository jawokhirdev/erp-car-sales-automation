from rest_framework import serializers
from api.models.Branch import Branch


class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = ['id', 'name', 'capacity', 'region', 'address', 'created_at', 'updated_at']
