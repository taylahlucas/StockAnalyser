# import scrapy
# import json
# import re
# from bs4 import BeautifulSoup
# import datetime
#
# from ..items import StockPriceItem
# from ..user_agents import get_ua
# from stock_prices.models import PriceModel, StockPriceModel
#
# # filename = 'test.html'
# # f = open(filename, 'w')
# # f.write(response.text)
# # f.close()
# months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
#
# class StockPriceSpider(scrapy.Spider):
#     name = 'stock_prices'
#     allowed_domains = ["au.finance.yahoo.com"]
#     current_company = ''
#
#     def __init__(self, asxCompanies, *args, **kwargs):
#         self.asxCompanies = asxCompanies
#
#         current_date = datetime.date.today()
#         start_date = datetime.date(current_date.year - 3, current_date.month, current_date.day)
#
#         self.dates = []
#         for day in range((current_date - start_date).days):
#             date = (start_date + datetime.timedelta(days=day)).strftime("%d %b %Y")
#             if date.__contains__("Jun"):
#                 date = date.replace("Jun", "June")
#             elif date.__contains__("Jul"):
#                 date = date.replace("Jul", "July")
#             elif date.__contains__("Sep"):
#                 date = date.replace("Sep", "Sept")
#             self.dates.append(date)
#
#         self.start_urls = []
#         for company in asxCompanies:
#             self.start_urls.append(f'https://au.finance.yahoo.com/quote/{company}/history?period1=1465257600&period2=1623024000&interval=1d&filter=history&frequency=1d&includeAdjustedClose=true')
#             # self.start_urls.append(f'https://finance.yahoo.com/quote/{company}/history?p={company}')
#         super().__init__(*args, **kwargs)
#
#     headers = {
#         'User-Agent': get_ua(),
#         'Accept': 'application/json,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
#         'Accept-Encoding': 'gzip, deflate, sdch',
#         'Accept-Language': 'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4',
#     }
#
#     def start_requests(self):
#         self.start_urls
#         for url in range(0, len(self.start_urls)):
#             self.current_company = self.asxCompanies[url]
#             yield scrapy.http.Request(self.start_urls[url], headers=self.headers)
#
#     def parse(self, response):
#         soup = BeautifulSoup(response.body, 'html.parser')
#
#         stock_price_item = StockPriceItem()
#         stock_price_item['asx_code'] = response.url.split("/")[-2]
#
#         if stock_price_item['asx_code'] == 'au.finance.yahoo.com':
#             stock_price_item['asx_code'] = self.current_company
#             return stock_price_item
#
#         for date in self.dates:
#             if soup.find(text=re.compile(date)) != None:
#                 value = soup.find(text=re.compile(date)).parent.parent.parent
#                 cells = value.find_all('span')[1:]
#                 cell_values = [c.text.strip() for c in cells]
#                 stock_prices = PriceModel.objects.create(
#                     asx_code=response.url.split("/")[-2],
#                     date=date,
#                     open=cell_values[0],
#                     high=cell_values[1],
#                     low=cell_values[2],
#                     close=cell_values[3],
#                     change=cell_values[4]
#                 )
#                 stock_prices.save()
#
#         return stock_price_item

