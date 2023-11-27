from rest_framework import routers
from .views import TrendsView

router = routers.DefaultRouter()
router.register(r'', TrendsView, basename='trends')

urlpatterns = []

urlpatterns += router.urls