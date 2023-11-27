from django.db import models
from django.utils import timezone
import uuid

class CombinedResultsModel(models.Model):
    date = models.DateTimeField(default=timezone.now)
    id = models.CharField(max_length=100, primary_key=True, default=uuid.uuid4)
    asx_code = models.CharField(max_length=10)
    company_name = models.CharField(max_length=100, blank=True)
    financials = models.ForeignKey('financials.FinancialsModel', on_delete=models.CASCADE, blank=True)
    trends = models.ForeignKey('trends.TrendsModel', on_delete=models.CASCADE, blank=True)
    stock_prices = models.ForeignKey('stock_prices.StockPriceModel', on_delete=models.CASCADE, blank=True)

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)