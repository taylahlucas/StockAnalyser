import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import baseButtonTheme from '../../styles/mui_themes'
import Button from '@material-ui/core/Button'
import SearchBar from 'material-ui-search-bar'
import CompanyList from './company_list'

export default function SideBar() {
    return (
        <div className='fixed height100p midGreyBackground'>
            <div className='container paddingTop20'>
                <div class='row paddingLeft10'>
                    <h1 className='heading lightTextColour'
                        onClick={() => Router.push('/company_search')}>StockAnalyser.</h1>
                </div>
                <div class='row-sm-4 d-flex justify-content-center'>
                    <SearchBar className='searchBar'
                        placeholder='Search companies...'
                        // value={value}
                        // onChange={(newValue) => onValueChanged(newValue)}
                        // disabled={showSelectedCompanies} 
                    />
                </div>
                <div class='row-sm-4 d-flex justify-content-center'>
                    <CompanyList />
                </div>
                <div class='row-sm-4 d-flex justify-content-center'>
                    <div className='absolute height30 paddingTop10'>
                        <ThemeProvider theme={baseButtonTheme}>
                            <CssBaseline />
                            <Button color='primary'>x companies selected</Button>  
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}


// Previous button attributes
//     position: 'absolute',
// bottom: showSelectedCompanies ? '260px' : '50px',
// zIndex: 2,
// backgroundColor: showSelectedCompanies ? '#859AB9' : '#5478AA',
// onClick={() => setShowSelectedCompanies(!showSelectedCompanies)}
//{selectedCompanies.length}