# Generated by Django 3.1.7 on 2021-04-09 00:07

from django.db import migrations, models
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FinancialsModel',
            fields=[
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('id', models.CharField(default=uuid.uuid4, max_length=100, primary_key=True, serialize=False)),
                ('asx_code', models.TextField()),
                ('company_name', models.TextField()),
                ('current_stock_price', models.TextField()),
                ('ev', models.TextField()),
                ('ebitda', models.TextField()),
                ('bv', models.TextField()),
                ('eps', models.TextField()),
                ('diluted_eps', models.TextField()),
                ('trailing_pe', models.TextField()),
                ('ev_revenue', models.TextField()),
                ('ev_ebitda', models.TextField()),
                ('price_to_book', models.TextField()),
                ('price_to_sales', models.TextField()),
                ('profit_margin', models.TextField()),
                ('operating_margin', models.TextField()),
                ('operating_cash_flow', models.TextField()),
                ('levered_cash_flow', models.TextField()),
                ('return_on_equity', models.TextField()),
                ('debt_equity', models.TextField()),
                ('dividend_payout', models.TextField()),
            ],
        ),
    ]
