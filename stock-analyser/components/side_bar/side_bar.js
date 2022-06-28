import SearchBar from 'material-ui-search-bar'
import Button from '@material-ui/core/Button'
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
             <Button
             // TODO: Fix style hree
                // style={{ 
                //     position: 'absolute',
                //     width: '200px', 
                //     height: '50px',
                    // bottom: showSelectedCompanies ? '260px' : '50px',
                    // zIndex: 2,
                    // backgroundColor: showSelectedCompanies ? '#859AB9' : '#5478AA',
                    // fontSize: '12px',
                    // color: 'white'}}
                    // onClick={() => setShowSelectedCompanies(!showSelectedCompanies)}
                    //{selectedCompanies.length}
                    >
                    companies selected
            </Button>  
        </Aux>
    )
}