const mockData = [
    {
        asxCode: 'MGQ.AX',
        companyName: "MOQ Limited (MOQ.AX)",
        date: "2021-03-29T21:22:39.998999Z",
        financials: {
            currentStockPrice: "0.2000",
            dilutedEPS: "-0.0700",
            priceToBook: "3.03",
            quarterlyRevenueGrowth: "9.10%",
            returnOnEquity: "-68.65%",
            trailingPE: "N/A",
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
        asxCode: "ONT.AX",
        companyName: "1300SMILES Limited (ONT.AX)",
        date: "2021-03-29T21:22:40.008691Z",
        financials: {
            currentStockPrice: "7.55",
            dilutedEPS: "0.37",
            priceToBook: "4.05",
            quarterlyRevenueGrowth: "4.20%",
            returnOnEquity: "20.26%",
            trailingPE: "20.63"
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
    }
]

export default mockData