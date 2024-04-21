from rest_framework import viewsets
from rest_framework import permissions

from api.models.Branch import Branch
from api.serializers.BranchSerializer import BranchSerializer


class BranchViewSet(viewsets.ModelViewSet):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer
    permission_classes = [permissions.AllowAny]
