from django.contrib import admin
from .models import FinancialsModel

class FinancialsAdmin(admin.ModelAdmin):
    list_display = ('date', 'asx_code', 'company_name', 'current_stock_price', 'ev', 'ebitda', 'bv', 'eps', 'diluted_eps', 'trailing_pe', 'ev_revenue', 'ev_ebitda', 'price_to_book', 'price_to_sales', 'profit_margin', 'operating_margin', 'operating_cash_flow', 'levered_cash_flow', 'return_on_equity', 'debt_equity', 'dividend_payout')


admin.site.register(FinancialsModel, FinancialsAdmin)