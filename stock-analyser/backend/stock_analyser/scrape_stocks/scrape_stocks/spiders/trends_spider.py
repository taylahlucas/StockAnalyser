import scrapy
from bs4 import BeautifulSoup
import re, requests
from datetime import datetime
from ..items import TrendsItem
from trends.models import TrendItemModel, TrendsModel
from ..user_agents import get_ua


class TrendsSpider(scrapy.Spider):
    name = 'trends'
    allowed_domains = ["au.finance.yahoo.com"]
    current_company = ''

    def __init__(self, asxCompanies, *args, **kwargs):
        self.asxCompanies = asxCompanies

        self.start_urls = []
        for company in asxCompanies:
            self.start_urls.append(f'https://au.finance.yahoo.com/quote/{company}/financials?p={company}')

        super().__init__(*args, **kwargs)

    headers = {
        'User-Agent': get_ua(),
        'Accept': 'application/json,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, sdch',
        'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4',
    }

    def start_requests(self):
        for url in range(0, len(self.start_urls)):
            self.current_company = self.asxCompanies[url]
            yield scrapy.http.Request(url=self.start_urls[url], headers=self.headers)

    def parse(self, response):
        # r = requests.get(response.url)
        soup = BeautifulSoup(response.body, 'html.parser')

        trends_item = TrendsItem()
        trends_item['asx_code'] = response.url.split("/")[-2]

        if trends_item['asx_code'] == 'au.finance.yahoo.com':
            trends_item['asx_code'] = self.current_company
            return trends_item

        total_revenue = soup.find(text=re.compile('Total revenue'))
        if total_revenue:
            if total_revenue and len(total_revenue) == len('Total revenue'):
                revenue_row = total_revenue.parent.parent.parent.parent
                revenue_cells = revenue_row.find_all('div')[2:]
                revenue_values = [c.text.strip() for c in revenue_cells]

                # Map revenue growth over time
                revenue_item_ttm = TrendItemModel.objects.create(
                    asx_code=response.url.split("/")[-2],
                    type=TrendItemModel.REVENUE,
                    year=0000,
                    value=revenue_values[1]
                )
                # Assign model id
                revenue_item_ttm.save()
                i = 0
                for revenue in revenue_values[2:]:
                    i += 1
                    revenue_item = TrendItemModel.objects.create(
                        asx_code=response.url.split("/")[-2],
                        type=TrendItemModel.REVENUE,
                        year=datetime.now().year - i,
                        value=revenue
                    )
                    revenue_item.save()

        operating_expenses = soup.find(text=re.compile('Total operating expenses'))
        if operating_expenses:
            if len(operating_expenses) == len('Total operating expenses'):
                operating_expenses_row = operating_expenses.parent.parent.parent.parent
                operating_expenses_cells = operating_expenses_row.find_all('div')[2:]
                operating_expenses_values = [c.text.strip() for c in operating_expenses_cells]

                # Map diluted EPS growth over time
                expenses_item_ttm = TrendItemModel.objects.create(
                    asx_code=response.url.split("/")[-2],
                    type=TrendItemModel.EXPENSES,
                    year=0000,
                    value=operating_expenses_values[1]
                )
                expenses_item_ttm.save()
                j = 0
                for expenses in operating_expenses_values[2:]:
                    j += 1
                    expenses_item = TrendItemModel.objects.create(
                        asx_code=response.url.split("/")[-2],
                        type=TrendItemModel.EXPENSES,
                        year=datetime.now().year - j,
                        value=expenses
                    )
                    expenses_item.save()

        eps = soup.find(text=re.compile('Diluted EPS'))
        if eps:
            if len(eps) == len('Diluted EPS'):
                eps_row = eps.parent.parent.parent.parent
                eps_cells = eps_row.find_all('div')[2:]
                eps_values = [c.text.strip() for c in eps_cells]

                # Map diluted EPS growth over time
                eps_item_ttm = TrendItemModel.objects.create(
                    asx_code=response.url.split("/")[-2],
                    type=TrendItemModel.EPS,
                    year=0000,
                    value=eps_values[1]
                )
                eps_item_ttm.save()
                k = 0
                for eps in eps_values[2:]:
                    k += 1
                    eps_item = TrendItemModel.objects.create(
                        asx_code=response.url.split("/")[-2],
                        type=TrendItemModel.EPS,
                        year=datetime.now().year - k,
                        value=eps
                    )
                    eps_item.save()

        return trends_item