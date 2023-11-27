# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from financials.models import FinancialsModel
from trends.models import TrendsModel, TrendItemModel
from stock_prices.models import  PriceModel,StockPriceModel


class FinancialsPipeline:
    def process_item(self, item, spider):
        if spider.name == 'financials':
            try:
                item['company_name']
            except KeyError:
                financials = FinancialsModel.objects.create(
                    asx_code=item['asx_code']
                )
                financials.save()
                return financials

            return FinancialsModel.objects.create(
                asx_code=item['asx_code'],
                company_name=item['company_name'],
                current_stock_price=item['current_stock_price'],
                ev=item['ev'],
                ebitda=item['ebitda'],
                bv=item['bv'],
                eps=item['eps'],
                diluted_eps=item['diluted_eps'],
                trailing_pe=item['trailing_pe'],
                ev_revenue=item['ev_revenue'],
                ev_ebitda=item['ev_ebitda'],
                price_to_book=item['price_to_book'],
                price_to_sales=item['price_to_sales'],
                profit_margin=item['profit_margin'],
                operating_margin=item['operating_margin'],
                operating_cash_flow=item['operating_cash_flow'],
                levered_cash_flow=item['levered_cash_flow'],
                return_on_equity=item['return_on_equity'],
                debt_equity=item['debt_equity'],
                dividend_payout=item['dividend_payout']
            )
        elif spider.name == 'trends':
            trends = TrendsModel.objects.create(asx_code=item['asx_code'])
            trends.revenue_trend.set(TrendItemModel.objects.all().filter(asx_code=item['asx_code']).filter(type=TrendItemModel.REVENUE))
            trends.expenses_trend.set(TrendItemModel.objects.all().filter(asx_code=item['asx_code']).filter(type=TrendItemModel.EXPENSES))
            trends.eps_trend.set(TrendItemModel.objects.all().filter(asx_code=item['asx_code']).filter(type=TrendItemModel.EPS))
            trends.save()
            return trends

        return None