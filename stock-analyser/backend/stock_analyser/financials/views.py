from scrapy.crawler import CrawlerRunner, CrawlerProcess
from scrapy.utils.log import configure_logging
from scrapy.settings import Settings
from crochet import setup
import time

import scrape_stocks.scrape_stocks.settings as my_settings
from scrape_stocks.scrape_stocks.spiders.financials_spider import FinancialsSpider
from .models import FinancialsModel

def get_financials(asxCompanies):
    crawler_settings = Settings()

    setup()
    configure_logging()
    crawler_settings.setmodule(my_settings)
    runner = CrawlerRunner()
    runner.settings = crawler_settings
    d = runner.crawl(FinancialsSpider, asxCompanies=asxCompanies)

    # 3 seconds per asx
    time.sleep(len(asxCompanies) * 4)

    print("FINANCIALS: ", FinancialsModel.objects.all().filter(asx_code__in=asxCompanies))
    return FinancialsModel.objects.all().filter(asx_code__in=asxCompanies)