# StockAnalyser-Frontend
Frontend for StockAnalyser app built in React

cd stock-analyser
npm run dev


# API Docs

## Asx Company Model

model AsxCompanyModel {
    enumCases = [
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
    ],
    parentConstants = [
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
        (UTILITIES_S, 'Utilities')
    ],
    parentEnumCases = [
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
    ],
    parameters = [
        date: Current Date and time displayed in format.
            [
                required: true,
                type: DateTimeField,
                example: '2021-01-13 07:25:17.808062+00:00'
            ],
        id: Unique identifier for the company model.
            [
                required: true,
                type: String,
                example: '12345678-1234-5678-1234-56781234sdfg78'
            ],
        name: Name of the company.
            [
                required: true,
                type: String,
                example: 'Macquarie Group Limited'
            ],
        asxCode: Asx code for company.
            [
                required: true,
                type: String,
                example: 'MQG'
            ],
        parentSector: Parent sector of company.
            [
                required: true,
                type: parentEnumCases,
                example: FINANCIALS.value = 'Financials'
            ],
        sector: Sector of company.
            [
                required: true,
                type: enumCases,
                example: DIVERSIFIED_FINANCIALS.value = Diversified Financials
            ]
    ]
}

<!-- /* REACT EXAMPLE */ -->

const asxCompanies = [
    {
        date: '2021-01-13 07:25:17.808062+00:00',
        id: '12345678-1234-5678-1234-567812345678',
        companyName: 'Macquarie Group Limited',
        asxCode: 'MQG',
        parentSector: 'Financials',
        sector: 'Diversified Financials'
    },
    }
        date: '2021-01-13 07:25:17.808062+00:00',
        id: '56745678-1234-5678-1234-567812345999',
        companyName: 'BHP Group Limited',
        asxCode: 'BHP',
        parentSector: 'Industrials',
        sector: 'Capital Goods'
    }
]

for name in name_list:
    let company_model = AsxCompanyModel(
        date = timezone.now(),
        id = uuid(),
        companyName = name,
        asxCode = name.strip[-3]
        parentSector = ? -- Figure out how to match parent sector to sector
        sector = ?
    )
i.e. if parent sector == INDUSTRIALS, sector == one of [CAPITAL_GOODS, COMMERICAL_SERVICES, TRANSPORTATION, CLASS_PEND]