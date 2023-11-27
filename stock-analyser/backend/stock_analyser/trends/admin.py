from django.contrib import admin
from .models import TrendsModel, TrendItemModel


class TrendsAdmin(admin.ModelAdmin):
    fields = ['date', 'asx_code', 'revenue_trend', 'expenses_trend', 'eps_trend']
    list_display = ('date', 'asx_code', 'get_revenue', 'get_expenses', 'get_eps')

    def get_revenue(self, obj):
        return "\n".join([r.revenue_trend for r in obj.revenue_trend.all()])

    def get_expenses(self, obj):
        return "\n".join([e.expenses_trend for e in obj.expenses_trend.all()])

    def get_eps(self, obj):
        return "\n".join([e.eps_trend for e in obj.eps_trend.all()])


class TrendsItemAdmin(admin.ModelAdmin):
    list_display = ('type', 'year', 'value')


admin.site.register(TrendsModel, TrendsAdmin)
admin.site.register(TrendItemModel, TrendsItemAdmin)