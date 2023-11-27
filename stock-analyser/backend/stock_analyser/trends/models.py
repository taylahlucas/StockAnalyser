from django.db import models
from django.utils import timezone
import uuid


class TrendsModel(models.Model):
    id = models.CharField(max_length=100, primary_key=True, default=uuid.uuid4)
    date = models.DateTimeField(default=timezone.now)
    asx_code = models.TextField()
    revenue_trend = models.ManyToManyField('trends.TrendItemModel', related_name='revenue')
    expenses_trend = models.ManyToManyField('trends.TrendItemModel', related_name='expenses')
    eps_trend = models.ManyToManyField('trends.TrendItemModel', related_name='eps')

    def get_revenue(self):
        return "\n".join([r.revenue_trend for r in self.revenue_trend.all()])

    def get_expenses(self):
        return "\n".join([e.expenses_trend for e in self.expenses_trend.all()])

    def get_eps(self):
        return "\n".join([e.eps_trend for e in self.eps_trend.all()])

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)


class TrendItemModel(models.Model):
    REVENUE = "REVENUE"
    EXPENSES = "EXPENSES"
    EPS = "EPS"

    choices = (
        (REVENUE, REVENUE),
        (EXPENSES, EXPENSES),
        (EPS, EPS)
    )

    id = models.UUIDField(primary_key=True, null=False, db_index=True, unique=True, editable=False, default=uuid.uuid4)
    asx_code = models.TextField(null=False)
    type = models.CharField(max_length=10, choices=choices)
    year = models.IntegerField()
    value = models.CharField(max_length=20)
    # Create foreign key with model id ?

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)