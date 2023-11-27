from rest_framework import routers
from .views import StockPriceView

router = routers.DefaultRouter()
router.register(r'', StockPriceView, basename='stock_prices')

urlpatterns = []

urlpatterns += router.urls