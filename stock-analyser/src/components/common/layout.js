import SideBar from '../side_bar/side_bar'
import ResultsTable from '../results/results_table'

const Layout = () => {
    return (
        <div className='flex-row'>
            <SideBar />
            <div className='flex-column'>
                <h1 className='heading lightTextColour padding30'>StockAnalyser.</h1>
                <ResultsTable />
            </div>
        </div>
    )
}

export default Layout