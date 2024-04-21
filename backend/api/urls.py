from django.urls import path, include
from rest_framework import routers

from api.views.BranchView import BranchViewSet
from api.views.CarTypeView import CarTypeViewSet
from api.views.CarView import CarViewSet
from api.views.ColorView import ColorViewSet
from api.views.CountryView import CountryViewSet
from api.views.CustomerView import CustomerViewSet
from api.views.FuelTypeView import FuelTypeViewSet
from api.views.InventoryView import InventoryViewSet
from api.views.MakeView import MakeViewSet
from api.views.PositionView import PositionViewSet
from api.views.RegionView import RegionViewSet
from api.views.TransferView import TransferViewSet


router = routers.DefaultRouter()
router.register(r'branches', BranchViewSet)
router.register(r'cars', CarViewSet, basename='car')
router.register(r'car-types', CarTypeViewSet, basename='car-type')
router.register(r'colors', ColorViewSet, basename='color')
router.register(r'countries', CountryViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'fuel-types', FuelTypeViewSet)
router.register(r'makes', MakeViewSet)
router.register(r'inventories', InventoryViewSet)
router.register(r'positions', PositionViewSet)
router.register(r'regions', RegionViewSet)
router.register(r'transfers', TransferViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
