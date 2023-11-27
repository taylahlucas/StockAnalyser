from django.db import models
from django.utils import timezone
import uuid

class PriceModel(models.Model):
    id = models.CharField(max_length=100, primary_key=True, default=uuid.uuid4)
    asx_code = models.TextField(null=False)
    date = models.TextField()
    close = models.TextField()

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

class StockPriceModel(models.Model):
    date = models.DateTimeField(default=timezone.now)
    id = models.CharField(max_length=100, primary_key=True, default=uuid.uuid4)
    asx_code = models.TextField(null=False)
    stock_prices = models.ManyToManyField('stock_prices.PriceModel')

    def get_stock_prices(self):
        return "\n".join([s.stock_prices for s in self.stock_prices.all()])

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

