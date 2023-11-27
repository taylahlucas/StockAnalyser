from django.db import models
from django.utils import timezone
import uuid

class FinancialsModel(models.Model):
    date = models.DateTimeField(default=timezone.now)
    id = models.CharField(max_length=100, primary_key=True, default=uuid.uuid4)
    asx_code = models.TextField()
    company_name = models.TextField(blank=True)
    current_stock_price = models.TextField(blank=True)

    ev = models.TextField(blank=True)
    ebitda = models.TextField(blank=True)
    bv = models.TextField(blank=True)
    eps = models.TextField(blank=True)
    diluted_eps = models.TextField(blank=True)
    trailing_pe = models.TextField(blank=True)
    ev_revenue = models.TextField(blank=True)
    ev_ebitda = models.TextField(blank=True)

    price_to_book = models.TextField(blank=True)
    price_to_sales = models.TextField(blank=True)

    profit_margin = models.TextField(blank=True)
    operating_margin = models.TextField(blank=True)

    operating_cash_flow = models.TextField(blank=True)
    levered_cash_flow = models.TextField(blank=True)

    return_on_equity = models.TextField(blank=True)
    debt_equity = models.TextField(blank=True)
    dividend_payout = models.TextField(blank=True)

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)