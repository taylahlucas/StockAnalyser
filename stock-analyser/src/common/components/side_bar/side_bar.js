import { useState, useEffect } from 'react'
import SearchBar from 'material-ui-search-bar'

import ThemedButton from '../buttons/themed_button'
import IndustryList from './industry_list'
import AsxIndustryGroups from '../../../utils/enums/asx_industry_titles'
import mockCompanies from '../../../mock/asx_mock_company_data'

export default function SideBar() {
    const [industries, setIndustries] = useState([])
    const [companies, setCompanies] = useState(mockCompanies)

    // Set industries
    useEffect(() => {
        const industries = []
        for (const [industry] of Object.entries(AsxIndustryGroups)) {
          industries.push(industry)
        }
        setIndustries(industries)
      }, [])

    return (
        <div className='fixed height100p midGreyBackground'>
            <div className='container paddingTop20'>
                <div className='row paddingLeft10'>
                    <h1 className='heading lightTextColour'
                        onClick={() => Router.push('/company_search')}>StockAnalyser.</h1>
                </div>
                <div className='row-sm-4 d-flex justify-content-center'>
                    <SearchBar className='searchBar'
                        placeholder='Search companies...'
                        style={{ width: '300px' }}
                        // value={value}
                        // onChange={(newValue) => onValueChanged(newValue)}
                        // disabled={showSelectedCompanies} 
                    />
                </div>
                <div className='row-sm-4 d-flex justify-content-center'>
                    <IndustryList industries={industries} />
                </div>
                {/* TODO: Add Companies Selected box */}
                <div className='row-sm-4 d-flex justify-content-center paddingTop60'>
                    <ThemedButton title='x companies selected'/>
                </div>
            </div>
        </div>
    )
}