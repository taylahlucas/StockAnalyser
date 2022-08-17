// TODO: Refacor these

const calculatePEG = (currentStockPrice, eps) => {
    if (eps !== '0.00') {
        const peg = Number(currentStockPrice) / Number(eps)
        return String(peg.toFixed(2))
    }
    return 'N/A'
}

// PEG values between 0 - 1 is considered undervalued
const getPEGColor = (value) => {
    if (value > 0 && value <= 1) {
        return { color: 'green' }
    }
    else if (value > 2 || value < 0) {
        return { color: 'red' }
    }
    return { color: '#707070' }
}

// EV/EBITDA values between 0 and 10 indicates is desired
const getEVtoEBITDAColor = (value) => {
    if (value > 0 && value <= 10) {
        return { color: 'green'}
    }
    else if (value <= 0 || value > 10) {
        return { color: 'red' }
    }
    return { color: '#707070' }
}

// EV/Revenue values between 1-2.5 indicates undervalued, 2.5-3 are neutral
const getEvtoRevenueColor = (value) => {
    if (value >=1 && value <= 2.5) {
        return { color: 'green' }
    } 
    else if (value > 2.5 && value <= 3) {
        return { color: 'red' }
    }
    return { color: '#707070' }
}

// Price-to-book values between 0 - 1 undervalued, between 1 - 3 is neutral
const getPriceToBookColor = (value) => {
    if (value > 0 && value <= 1) {
        return { color: 'green' }
    }
    else if (value <= 0 || value > 3) {
        return { color: 'red' }
    }
    return { color: '#707070' }
}

// Price-to-sales values between 1 - 2 are desired, less than 1 is excellent
const getPriceToSalesColor = (value) => {
    if (value > 0 && value <= 2) {
        return { color: 'green '}
    }
    else if (value <= 0 || value > 5) {
        return { color: 'red' }
    }
    return { color: '#707070' }
}

// Profit margin values less than 5 are low, 5-10 are average, 10 + is desired
const getProfitMarginColor = (value) => {
    if (value > "10.00%") {
        return { color: 'green' }
    }
    else if (value <= "5.00%") {
        return { color: 'red' }
    }
    return { color: '#707070' }
}

// Operating margin values 15% or higher are desired
const getOperatingMarginColor = (value) => {
    if (value >= "15.00%") {
        return { color: 'green' }
    }
    else if (value <= "0.00%") {
        return { color: 'red' }
    }
    return { color: '#707070' }
}

// Operating cash flow ratio less than 1 is not good, greater than 1 is desired
const getOperatingCashFlowColor = (value) => {
    if (value >= 1) {
        return { color: 'green' }
    }
    return { color: 'red' }
}

// ROE value between 15 - 20% are desired, the higher the better
const getRoeColor = (value) => {
    if (value >= "15.00%") {
        return { color: 'green' }
    }
    else if (value <= "10.00%") {
        return { color: 'red' }
    }
    return { color: '#707070' }
}

// Debt Equity ratios of between 0 - 1 are desired, should not be below 0 or above 2
const getDebtEquityColor = (value) => {
    if (value > 0 && value <= 1) { 
        return { color: 'green' }
    }
    else if (value <= 0 || value >= 2) {
        return { color: 'red' }
    }
    return { color: '#707070' }
}

// Dividend payout ratios of 55% and above are desired
const getDividendPayoutColor = (value) => {
    if (value >= "55.00%") {
        return { color: 'green' }
    }
    return { color: '#707070' }
}

const getTrendValues = (trendList) => {
    const trendValues = []
    const trendYears = []
    trendList.map((trend => {
        if (trend.value != "-") {
            trendValues.push(Number(trend.value.replace(',', '')))
            trendYears.push(trend.year)
        }
    }))

    return [trendYears, trendValues]
}

export default {
    calculatePEG,
    getPEGColor,
    getEVtoEBITDAColor,
    getEvtoRevenueColor,
    getPriceToBookColor,
    getPriceToSalesColor,
    getProfitMarginColor,
    getOperatingMarginColor,
    getOperatingCashFlowColor,
    getRoeColor,
    getDebtEquityColor,
    getDividendPayoutColor,
    getTrendValues
}