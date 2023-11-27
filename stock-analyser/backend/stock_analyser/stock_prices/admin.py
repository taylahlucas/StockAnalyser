from django.contrib import admin
from .models import PriceModel, StockPriceModel


class PriceAdmin(admin.ModelAdmin):
    list_display = ('date', 'close')

class StockPriceAdmin(admin.ModelAdmin):
    fields = ['date', 'asx_code', 'stock_prices']
    list_display = ('date', 'asx_code', 'get_stock_prices')

    def get_stock_prices(self, obj):
        return "\n".join([r.stock_prices for r in obj.stock_prices.all()])


admin.site.register(PriceModel, PriceAdmin)
admin.site.register(StockPriceModel, StockPriceAdmin)