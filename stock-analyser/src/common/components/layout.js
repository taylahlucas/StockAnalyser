import SideBar from '../../common/components/side_bar/side_bar'
import ResultsTable from '../../common/components/results/results_table'

const Layout = () => {
    return (
        <div className='flex-row screenBackground'>
            <SideBar />
            <div className='flex-column darkGreyBackground'>
                <h1 className='heading lightTextColour padding30'>StockAnalyser.</h1>
                <ResultsTable />
            </div>
        </div>
    )
}

export default Layout