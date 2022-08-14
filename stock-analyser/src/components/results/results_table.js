import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import MetricsHelper from '../../utils/helpers/metrics'
import mockTableData from '../../mock/asx_mock_table_data'

const propTypes = {
    companyNames: PropTypes.arrayOf(
        PropTypes.string
    )
}

const ResultsTable = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Load table results

    }, [])

    const renderTableData = () => {
        return mockTableData.map((company, key) => {
            const epsValues = MetricsHelper.getTrendValues(company.trends.epsTrend)
            const revenueValues = MetricsHelper.getTrendValues(company.trends.revenueTrend)
            const expenseValues = MetricsHelper.getTrendValues(company.trends.expensesTrend)
            const peg = MetricsHelper.calculatePEG(company.financials.currentStockPrice, company.financials.eps)

            return (
                <tr key={key} className='lightTextColour tableCellText'>
                    <td>{company.asxCode.slice(0, -3)}</td>
                    <td>{company.companyName.slice(0, -8)}</td> 
                    
                    <td>{company.financials.currentStockPrice}</td>
                    <td>{company.financials.enterpriseValue}</td>
                    <td>{company.financials.ebitda}</td>
                    <td>{company.financials.bookValue}</td>
                    <td>{company.financials.eps}</td>
                    <td>{company.financials.dilutedEPS}</td>
                    <td>{company.financials.trailingPE}</td>

                    <td style={MetricsHelper.getPEGColor(peg)}>
                        {peg}
                    </td>
                    <td style={MetricsHelper.getEvtoRevenueColor(company.financials.evRevenue)}>
                        {company.financials.evRevenue}
                    </td>
                    <td style={MetricsHelper.getEVtoEBITDAColor(company.financials.evEbitda)}>
                            {company.financials.evEbitda}
                    </td>
                    <td style={MetricsHelper.getPriceToBookColor(company.financials.priceToBook)}>
                        {company.financials.priceToBook}
                    </td>
                    <td style={MetricsHelper.getPriceToSalesColor(company.financials.priceToSales)}>
                        {company.financials.priceToSales}
                    </td>
                    <td style={MetricsHelper.getProfitMarginColor(company.financials.profitMargin)}>
                        {company.financials.profitMargin}
                    </td>
                    <td style={MetricsHelper.getOperatingMarginColor(company.financials.operatingMargin)}>
                        {company.financials.operatingMargin}
                    </td>
                    <td style={MetricsHelper.getOperatingCashFlowColor(company.financials.operatingCashFlow)}>
                        {company.financials.operatingCashFlow}
                    </td>
                    <td>{company.financials.leveredCashFlow}</td>
                    <td style={MetricsHelper.getRoeColor(company.financials.returnOnEquity)}>
                        {company.financials.returnOnEquity}
                    </td>
                    <td style={MetricsHelper.getDebtEquityColor(company.financials.debtEquity)}>
                        {company.financials.debtEquity}
                    </td>
                    <td style={MetricsHelper.getDividendPayoutColor(company.financials.dividendPayout)}>
                        {company.financials.dividendPayout}
                    </td>
                </tr>
            )
        })
    }


    return (
        <div>
            {isLoading ?
                <table id='resultsTable' className='darkGreyBackground midTextColor'>
                    <thead id='tableHeading'>
                        <tr>
                            <th>ASX</th>
                            <th>COMPANY<br />NAME</th>
                            <th>CURRENT STOCK<br />PRICE</th>
                            <th>EV</th>
                            <th>EBITDA</th>
                            <th>BVPS</th>
                            <th>EPS</th>
                            <th>DILUTED EPS</th>
                            <th>TRAILING<br />P/E</th>
                            <th>PEG</th>
                            <th>EV/REVENUE</th>
                            <th>EV/EBITDA</th>
                            <th>P/B</th>
                            <th>P/S</th>
                            <th>PROFIT<br />MARGIN</th>
                            <th>OPERATING<br />MARGIN</th>
                            <th>OPERATING<br />CASH FLOW</th>
                            <th>LEVERED<br />CASH FLOW</th>
                            <th>ROE</th>
                            <th>D/E</th>
                            <th>DIVIDEND<br />PAYOUT</th>
                            {/* <th>DILUTED<br />EPS TREND</th>
                            <th>GROWTH<br />VS<br />EXPENSES</th> */}
                        </tr>
                    </thead>
                    <tbody>{renderTableData()}</tbody>
                </table>
                :
                // TODO: Show loading indicator
                null
            }
        </div>
    )
}

ResultsTable.propTypes = propTypes

export default ResultsTable