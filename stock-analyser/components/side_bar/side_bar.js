import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import baseButtonTheme from '../../styles/mui_themes'
import Button from '@material-ui/core/Button'
import SearchBar from 'material-ui-search-bar'

import Aux from '../../utils/aux'

export default function SideBar() {
    return (
        <div className='fixed width200 midGreyBackground marginLeft0'>
            <Aux>
            <h1 className='fixed heading lightTextColour marginLeft20'
                onClick={() => Router.push('/company_search')}>StockAnalyser.
            </h1>
            <SearchBar className='searchBar relative'
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