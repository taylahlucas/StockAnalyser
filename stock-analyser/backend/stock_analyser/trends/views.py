from scrapy.crawler import CrawlerRunner, CrawlerProcess
from scrapy.utils.log import configure_logging
from scrapy.settings import Settings
from crochet import setup
import time

import scrape_stocks.scrape_stocks.settings as my_settings
from scrape_stocks.scrape_stocks.spiders.trends_spider import TrendsSpider
from .models import TrendsModel


def get_trends(asxCompanies):
    crawler_settings = Settings()

    setup()
    configure_logging()
    crawler_settings.setmodule(my_settings)
    runner = CrawlerRunner()
    runner.settings = crawler_settings
    d = runner.crawl(TrendsSpider, asxCompanies=asxCompanies)

    # 5 seconds per asx
    time.sleep(len(asxCompanies) * 6)
    print("RETURNING TREND: ", TrendsModel.objects.all().filter(asx_code__in=asxCompanies))
    return TrendsModel.objects.all().filter(asx_code__in=asxCompanies)