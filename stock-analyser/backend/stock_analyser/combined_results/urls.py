from rest_framework import routers
from .views import CombinedResultsView

router = routers.DefaultRouter()
router.register(r'', CombinedResultsView, basename='results')

urlpatterns = []

urlpatterns += router.urls