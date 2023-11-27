import scrapy
from bs4 import BeautifulSoup
from ..items import FinancialsItem
from ..user_agents import get_ua

# filename = 'test.html'
# f = open(filename, 'w')
# f.write(response.text)
# f.close()

class FinancialsSpider(scrapy.Spider):
    name = 'financials'
    allowed_domains = ["au.finance.yahoo.com"]
    current_company = ''

    def __init__(self, asxCompanies, *args, **kwargs):
        self.asxCompanies = asxCompanies

        self.start_urls = []
        for company in asxCompanies:
            self.start_urls.append(f'https://au.finance.yahoo.com/quote/{company}/key-statistics?p={company}')

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
            yield scrapy.http.Request(self.start_urls[url], headers=self.headers)

    def parse(self, response):
        soup = BeautifulSoup(response.body, 'html.parser')

        financial_item = FinancialsItem()
        financial_item['asx_code'] = response.url.split("/")[-2]

        if financial_item['asx_code'] == 'au.finance.yahoo.com':
            financial_item['asx_code'] = self.current_company
            return financial_item

        financial_item['company_name'] = response.xpath('//div[@class="D(ib) "]/h1[@class="D(ib) Fz(18px)"]/text()').extract()[0]
        financial_item['current_stock_price'] = response.xpath('//div[@class="My(6px) Pos(r) smartphone_Mt(6px)"]/div[@class="D(ib) Va(m) Maw(65%) Ov(h)"]//div//span/text()').extract()[0]

        financial_item['ev'] = soup.find(text='Enterprise value').find_next('td').text
        financial_item['ebitda'] = soup.find(text="EBITDA").find_next('td').text
        financial_item['bv'] = soup.find(text='Book value per share').find_next('td').text
        financial_item['eps'] = soup.find(text='Revenue per share').find_next('td').text
        financial_item['diluted_eps'] = soup.find(text='Diluted EPS').find_next('td').text
        financial_item['trailing_pe'] = soup.find(text='Trailing P/E').find_next('td').text

        financial_item['ev_revenue'] = soup.find(text="Enterprise value/revenue").find_next('td').text
        financial_item['ev_ebitda'] = soup.find(text="Enterprise value/EBITDA").find_next('td').text

        financial_item['price_to_book'] = soup.find(text='Price/book').find_next('td').text
        financial_item['price_to_sales'] = soup.find(text='Price/sales').find_next('td').text

        financial_item['profit_margin'] = soup.find(text='Profit margin').find_next('td').text
        financial_item['operating_margin'] = soup.find(text='Operating margin').find_next('td').text

        financial_item['operating_cash_flow'] = soup.find(text="Operating cash flow").find_next('td').text
        financial_item['levered_cash_flow'] = soup.find(text="Levered free cash flow").find_next('td').text

        financial_item['return_on_equity'] = soup.find(text='Return on equity').find_next('td').text
        financial_item['debt_equity'] = soup.find(text="Total debt/equity").find_next('td').text
        financial_item['dividend_payout'] = soup.find(text='Payout ratio').find_next('td').text

        return financial_item
