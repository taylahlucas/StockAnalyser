export const Sectors = {
    ENERGY: 'Energy',
    BANKS: 'Banks',
    MATERIALS:'Materials',
    CAPITAL_GOODS: 'Capital Goods',
    RETAILING: 'Retailing',
    FOOD_TOBACCO: 'Food, Beverage & Tobacco',
    FOOD_STAPLES: 'Food & Staples Retailing',
    REAL_ESTATE: 'Real Estate',
    CLASS_PEND: 'Class Pend',
    MEDIA: 'Media & Entertainment',
    DURABLES: 'Consumer Durables & Apparel',
    HOUSEHOLD: 'Household & Personal Products',
    PHARMA: 'Pharmaceuticals, Biotechnology & Life Sciences',
    UTILITIES: 'Utilities',
    AUTOMOBILE: 'Automobiles & Components',
    TRANSPORTATION: 'Transportation',
    TECHNOLOGY: 'Technology Hardware & Equipment',
    DIVERSIFIED_FINANCIALS: 'Diversified Financials',
    INSURANCE:'Insurance',
    CONSUMER_SERVICES: 'Consumer Services',
    COMMERICAL_SERVICES: 'Commercial & Professional Services',
    SOFTWARE_AND_SERVICES: 'Software & Services',
    TELECOMMUNICATION_SERVICES: 'Telecommunication Services',
    HEALTH_CARE_SERVICES: 'Health Care Equipment & Services',
    SEMICONDUCTOR_EQUIPTMENT: 'Semiconductors & Semiconductor Equipment',
    MISC: 'Not Applic'
}

export const ParentSectors = {
    INDUSTRIALS: 'Industrials',
    ENERGY_S: 'Energy',
    MATERIALS_S: 'Materials',
    CONSUMER_DISCRETIONARY: 'Consumer Discretionary',
    CONSUMER_STAPLES: 'Consumer Staples',
    HEALTH_CARE: 'Health Care',
    FINANCIALS: 'Financials',
    INFORMATION_TECHNOLOGY: 'Information Technology',
    COMMUNICATION_SERVICES: 'Communication Services',
    REAL_ESTATE_S: 'Real Estate',
    UTILITIES_S: 'Utilities'
}

export const SectorGroups = {
    INDUSTRIALS: [
        Sectors.CAPITAL_GOODS, 
        Sectors.COMMERICAL_SERVICES, 
        Sectors.TRANSPORTATION, 
        Sectors.CLASS_PEND
    ],
    ENERGY_S: [
        Sectors.ENERGY
    ],
    MATERIALS_S: [Sectors.MATERIALS],
    CONSUMER_DISCRETIONARY: [
        Sectors.AUTOMOBILE,
        Sectors.DURABLES, 
        Sectors.CONSUMER_SERVICES, 
        Sectors.RETAILING
    ],
    CONSUMER_STAPLES: [
        Sectors.FOOD_STAPLES, 
        Sectors.FOOD_TOBACCO, 
        Sectors.HOUSEHOLD
    ],
    HEALTH_CARE: [
        Sectors.HEALTH_CARE_SERVICES, 
        Sectors.PHARMA
    ],
    FINANCIALS: [
        Sectors.BANKS, 
        Sectors.DIVERSIFIED_FINANCIALS, 
        Sectors.INSURANCE
    ],
    INFORMATION_TECHNOLOGY: [
        Sectors.TECHNOLOGY, 
        Sectors.SOFTWARE_AND_SERVICES, 
        Sectors.SEMICONDUCTOR_EQUIPTMENT
    ],
    COMMUNICATION_SERVICES: [
        Sectors.TELECOMMUNICATION_SERVICES, 
        Sectors.MEDIA
    ],
    REAL_ESTATE_S: [
        Sectors.REAL_ESTATE
    ],
    UTILITIES_S: [
        Sectors.UTILITIES, 
        Sectors.MISC
    ]
}

export function getParentSectorList() {
    return Object.values(ParentSectors)
}

export function getIndustriesForSector(sector) {
    // SectorGroups[sector]
    // const companies = Object.keys(SectorGroups).filter((key) => key === sector)
    console.log("SECTORS: ", SectorGroups[sector])
}