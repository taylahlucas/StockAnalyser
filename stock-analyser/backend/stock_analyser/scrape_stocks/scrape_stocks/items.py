# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

from scrapy_djangoitem import DjangoItem
from financials.models import FinancialsModel
from trends.models import TrendsModel, TrendItemModel
from stock_prices.models import StockPriceModel

class FinancialsItem(DjangoItem):
    django_model = FinancialsModel

class TrendsItem(DjangoItem):
    django_model = TrendsModel