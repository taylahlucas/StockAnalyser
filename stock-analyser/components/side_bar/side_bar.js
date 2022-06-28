import SearchBar from 'material-ui-search-bar'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import baseButtonTheme from '../../styles/mui_themes'
import Aux from '../../utils/aux'

export default function SideBar() {
    return (
        <Aux>
            <h1 className={`heading lightTextColour`}
                onClick={() => Router.push('/company_search')}>StockAnalyser.
            </h1>
            <SearchBar className='searchBar'
                placeholder='Search companies...'
                // value={value}
                // onChange={(newValue) => onValueChanged(newValue)}
                // disabled={showSelectedCompanies} 
            />
            <ThemeProvider theme={baseButtonTheme}>
                <CssBaseline />
                <Button color='primary'>x companies selected</Button>  
            </ThemeProvider>
        </Aux>
    )
}


// Previous button attributes

//     position: 'absolute',
// bottom: showSelectedCompanies ? '260px' : '50px',
// zIndex: 2,
// backgroundColor: showSelectedCompanies ? '#859AB9' : '#5478AA',
// onClick={() => setShowSelectedCompanies(!showSelectedCompanies)}
//{selectedCompanies.length}