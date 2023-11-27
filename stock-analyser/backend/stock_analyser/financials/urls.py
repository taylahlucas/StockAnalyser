from rest_framework import routers
from .views import FinancialsView

router = routers.DefaultRouter()
router.register(r'', FinancialsView, basename='financials')

urlpatterns = []

urlpatterns += router.urls