from django.db import models
from django.utils import timezone
import uuid

class AsxCompanyModel(models.Model):
    ENERGY = 'Energy'
    BANKS = 'Banks'
    MATERIALS = 'Materials'
    CAPITAL_GOODS = 'Capital Goods'
    RETAILING = 'Retailing'
    FOOD_TOBACCO = 'Food, Beverage & Tobacco'
    FOOD_STAPLES = 'Food & Staples Retailing'
    REAL_ESTATE = 'Real Estate'
    CLASS_PEND = 'Class Pend'
    MEDIA = 'Media & Entertainment'
    DURABLES = 'Consumer Durables & Apparel'
    HOUSEHOLD = 'Household & Personal Products'
    PHARMA = 'Pharmaceuticals, Biotechnology & Life Sciences'
    UTILITIES = 'Utilities'
    AUTOMOBILE = 'Automobiles & Components'
    TRANSPORTATION = 'Transportation'
    TECHNOLOGY = 'Technology Hardware & Equipment'
    DIVERSIFIED_FINANCIALS = 'Diversified Financials'
    INSURANCE = 'Insurance'
    CONSUMER_SERVICES = 'Consumer Services'
    COMMERICAL_SERVICES = 'Commercial & Professional Services'
    SOFTWARE_AND_SERVICES = 'Software & Services'
    TELECOMMUNICATION_SERVICES = 'Telecommunication Services'
    HEALTH_CARE_SERVICES = 'Health Care Equipment & Services'
    SEMICONDUCTOR_EQUIPTMENT = 'Semiconductors & Semiconductor Equipment'
    MISC = 'Not Applic'

    INDUSTRIALS = [CAPITAL_GOODS, COMMERICAL_SERVICES, TRANSPORTATION, CLASS_PEND]
    ENERGY_S = [ENERGY]
    MATERIALS_S = [MATERIALS]
    CONSUMER_DISCRETIONARY = [AUTOMOBILE, DURABLES, CONSUMER_SERVICES, RETAILING]
    CONSUMER_STAPLES = [FOOD_STAPLES, FOOD_TOBACCO, HOUSEHOLD]
    HEALTH_CARE = [HEALTH_CARE_SERVICES, PHARMA]
    FINANCIALS = [BANKS, DIVERSIFIED_FINANCIALS, INSURANCE]
    INFORMATION_TECHNOLOGY = [TECHNOLOGY, SOFTWARE_AND_SERVICES, SEMICONDUCTOR_EQUIPTMENT]
    COMMUNICATION_SERVICES = [TELECOMMUNICATION_SERVICES, MEDIA]
    REAL_ESTATE_S = [REAL_ESTATE]
    UTILITIES_S = [UTILITIES, MISC]

    parent_sector_choices = [
        (INDUSTRIALS, 'Industrials'),
        (ENERGY_S, 'Energy'),
        (MATERIALS_S, 'Materials'),
        (CONSUMER_DISCRETIONARY, 'Consumer Discretionary'),
        (CONSUMER_STAPLES, 'Consumer Staples'),
        (HEALTH_CARE, 'Health Care'),
        (FINANCIALS, 'Financials'),
        (INFORMATION_TECHNOLOGY, 'Information Technology'),
        (COMMUNICATION_SERVICES, 'Communication Services'),
        (REAL_ESTATE_S, 'Real Estate'),
        (UTILITIES_S, 'Utilities'),
    ]

    sector_choices = [
        (ENERGY, ENERGY),
        (BANKS, BANKS),
        (MATERIALS, MATERIALS),
        (CAPITAL_GOODS, CAPITAL_GOODS),
        (RETAILING, RETAILING),
        (FOOD_TOBACCO, FOOD_TOBACCO),
        (FOOD_STAPLES, FOOD_STAPLES),
        (REAL_ESTATE, REAL_ESTATE),
        (CLASS_PEND, CLASS_PEND),
        (MEDIA, MEDIA),
        (DURABLES, DURABLES),
        (HOUSEHOLD, HOUSEHOLD),
        (PHARMA, PHARMA),
        (UTILITIES, UTILITIES),
        (AUTOMOBILE, AUTOMOBILE),
        (TRANSPORTATION, TRANSPORTATION),
        (TECHNOLOGY, TECHNOLOGY),
        (DIVERSIFIED_FINANCIALS, DIVERSIFIED_FINANCIALS),
        (INSURANCE, INSURANCE),
        (CONSUMER_SERVICES, CONSUMER_SERVICES),
        (COMMERICAL_SERVICES, COMMERICAL_SERVICES),
        (SOFTWARE_AND_SERVICES, SOFTWARE_AND_SERVICES),
        (TELECOMMUNICATION_SERVICES, TELECOMMUNICATION_SERVICES),
        (HEALTH_CARE_SERVICES, HEALTH_CARE_SERVICES),
        (SEMICONDUCTOR_EQUIPTMENT, SEMICONDUCTOR_EQUIPTMENT),
        (MISC, MISC),
    ]

    date = models.DateTimeField(default=timezone.now)
    id = models.CharField(max_length=100, primary_key=True, default=uuid.uuid4)
    name = models.CharField(max_length=100)
    asx_code = models.CharField(max_length=3)
    parent_sector = models.CharField(max_length=100)
    sector = models.CharField(max_length=100, choices=sector_choices)

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)