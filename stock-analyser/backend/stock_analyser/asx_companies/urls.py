from rest_framework import routers
from .views import AsxCompanyView

router = routers.DefaultRouter()
router.register(r'', AsxCompanyView, basename='asx_companies')

urlpatterns = []

urlpatterns += router.urls