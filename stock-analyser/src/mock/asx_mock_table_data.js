const mockTableData = [
    {
        asxCode: 'MGQ.AX',
        companyName: "MOQ Limited (MOQ.AX)",
        date: "2021-03-29T21:22:39.998999Z",
        financials: {
            currentStockPrice: "10.40",
            enterpriseValue: "-23.23B",
            ebitda: "N/A",
            bookValue: "77.50",
            eps: "12.31",
            dilutedEPS: "-0.0700",
            trailingPE: "14.33",
            evRevenue: "-3.37",
            priceToBook: "3.03",
            priceToSales: "9.79",
            profitMarign: "27.04%",
            operatingMargin: "38.03%",
            operatingCashFlow: "32.99B",
            leveredCashFlow: "N/A",
            returnOnEquity: "-68.65%",
            debtEquity: "N/A",
            dividendPayout: "49.33%"
        },
        trends: {
            epsTrend: [
                { type: "EPS", value: "0.01", year: 2017 }, 
                { type: "EPS", value: "0.33", year: 2018 }
            ],
            expensesTrend: [
                { type: "EXPENSES", value: "10,178", year: 2017 }, 
                { type: "EXPENSES", value: "25,795", year: 2018 }
            ],
            revenueTrend: [
                { type: "REVENUE", value: "10,178", year: 2017 }, 
                { type: "REVENUE", value: "25,795", year: 2018 }
            ]
        }
    },
    {
        asxCode: 'ABC.AX',
        companyName: "1300SMILES Limited (ONT.AX)",
        date: "2021-03-29T21:22:40.008691Z",
        financials: {
            currentStockPrice: "0.2000",
            enterpriseValue: "-23.23B",
            ebitda: "N/A",
            bookValue: "77.50",
            eps: "12.31",
            dilutedEPS: "-0.0700",
            trailingPE: "14.33",
            evRevenue: "-3.37",
            priceToBook: "3.03",
            priceToSales: "9.79",
            profitMarign: "27.04%",
            operatingMargin: "38.03%",
            operatingCashFlow: "32.99B",
            leveredCashFlow: "N/A",
            returnOnEquity: "-68.65%",
            debtEquity: "N/A",
            dividendPayout: "49.33%"
        },
        trends: {
            epsTrend: [
                { type: "EPS", value: "0.01", year: 2017 }, 
                { type: "EPS", value: "0.33", year: 2018 }
            ],
            expensesTrend: [
                { type: "EXPENSES", value: "10,178", year: 2017 }, 
                { type: "EXPENSES", value: "25,795", year: 2018 }
            ],
            revenueTrend: [
                { type: "REVENUE", value: "10,178", year: 2017 }, 
                { type: "REVENUE", value: "25,795", year: 2018 }
            ]
        }
    },
    {
        asxCode: 'SDY.AX',
        companyName: "Mock Company",
        date: "2021-03-29T21:22:40.008691Z",
        financials: {
            currentStockPrice: "0.2000",
            enterpriseValue: "-23.23B",
            ebitda: "N/A",
            bookValue: "77.50",
            eps: "12.31",
            dilutedEPS: "-0.0700",
            trailingPE: "14.33",
            evRevenue: "-3.37",
            priceToBook: "3.03",
            priceToSales: "9.79",
            profitMarign: "27.04%",
            operatingMargin: "38.03%",
            operatingCashFlow: "32.99B",
            leveredCashFlow: "N/A",
            returnOnEquity: "-68.65%",
            debtEquity: "N/A",
            dividendPayout: "49.33%"
        },
        trends: {
            epsTrend: [
                { type: "EPS", value: "0.23", year: 2017 }, 
                { type: "EPS", value: "0.45", year: 2018 }
            ],
            expensesTrend: [
                { type: "EXPENSES", value: "10,258", year: 2017 }, 
                { type: "EXPENSES", value: "25,795", year: 2018 }
            ],
            revenueTrend: [
                { type: "REVENUE", value: "12,178", year: 2017 }, 
                { type: "REVENUE", value: "27,795", year: 2018 }
            ]
        }
    },
    {
        asxCode: 'ABD.AX',
        companyName: "Mock Company 2",
        date: "2021-03-29T21:22:40.008691Z",
        financials: {
            currentStockPrice: "0.2000",
            enterpriseValue: "-23.23B",
            ebitda: "N/A",
            bookValue: "77.50",
            eps: "12.31",
            bookValue: "77.50",
            eps: "12.31",
            dilutedEPS: "-0.0700",
            trailingPE: "14.33",
            evRevenue: "-3.37",
            priceToBook: "3.03",
            priceToSales: "9.79",
            profitMarign: "27.04%",
            operatingMargin: "38.03%",
            operatingCashFlow: "32.99B",
            leveredCashFlow: "N/A",
            returnOnEquity: "-68.65%",
            debtEquity: "N/A",
            dividendPayout: "49.33%"
        },
        trends: {
            epsTrend: [
                { type: "EPS", value: "0.23", year: 2017 }, 
                { type: "EPS", value: "0.45", year: 2018 }
            ],
            expensesTrend: [
                { type: "EXPENSES", value: "10,258", year: 2017 }, 
                { type: "EXPENSES", value: "25,795", year: 2018 }
            ],
            revenueTrend: [
                { type: "REVENUE", value: "12,178", year: 2017 }, 
                { type: "REVENUE", value: "27,795", year: 2018 }
            ]
        }
    },
    {
        asxCode: 'ONT.AX',
        companyName: "Mock Company 3",
        date: "2021-03-29T21:22:40.008691Z",
        financials: {
            currentStockPrice: "0.2000",
            enterpriseValue: "-23.23B",
            ebitda: "N/A",
            bookValue: "77.50",
            eps: "12.31",
            dilutedEPS: "-0.0700",
            trailingPE: "14.33",
            evRevenue: "-3.37",
            priceToBook: "3.03",
            priceToSales: "9.79",
            profitMarign: "27.04%",
            operatingMargin: "38.03%",
            operatingCashFlow: "32.99B",
            leveredCashFlow: "N/A",
            returnOnEquity: "-68.65%",
            debtEquity: "N/A",
            dividendPayout: "49.33%"
        },
        trends: {
            epsTrend: [
                { type: "EPS", value: "0.23", year: 2017 }, 
                { type: "EPS", value: "0.45", year: 2018 }
            ],
            expensesTrend: [
                { type: "EXPENSES", value: "10,258", year: 2017 }, 
                { type: "EXPENSES", value: "25,795", year: 2018 }
            ],
            revenueTrend: [
                { type: "REVENUE", value: "12,178", year: 2017 }, 
                { type: "REVENUE", value: "27,795", year: 2018 }
            ]
        }
    },
    {
        asxCode: 'ABO.AX',
        companyName: "Mock Company 6",
        date: "2021-03-29T21:22:40.008691Z",
        financials: {
            currentStockPrice: "0.2000",
            enterpriseValue: "-23.23B",
            ebitda: "N/A",
            bookValue: "77.50",
            eps: "12.31",
            dilutedEPS: "-0.0700",
            trailingPE: "14.33",
            evRevenue: "-3.37",
            priceToBook: "3.03",
            priceToSales: "9.79",
            profitMarign: "27.04%",
            operatingMargin: "38.03%",
            operatingCashFlow: "32.99B",
            leveredCashFlow: "N/A",
            returnOnEquity: "-68.65%",
            debtEquity: "N/A",
            dividendPayout: "49.33%"
        },
        trends: {
            epsTrend: [
                { type: "EPS", value: "0.23", year: 2017 }, 
                { type: "EPS", value: "0.45", year: 2018 }
            ],
            expensesTrend: [
                { type: "EXPENSES", value: "10,258", year: 2017 }, 
                { type: "EXPENSES", value: "25,795", year: 2018 }
            ],
            revenueTrend: [
                { type: "REVENUE", value: "12,178", year: 2017 }, 
                { type: "REVENUE", value: "27,795", year: 2018 }
            ]
        }
    }
]

export default mockTableData