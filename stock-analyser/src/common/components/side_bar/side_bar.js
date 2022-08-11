import { useState, useEffect } from 'react'
import SearchBar from '../elements/search_bar'

import DropdownButton from '../buttons/dropdown_button'
import IndustryList from './industry_list'
import AsxIndustryGroups from '../../utils/enums/asx_industry_titles'
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
        <div className='width300 height100p midGreyBackground'>
            <div className='container paddingTop60'>
                <div className='row-sm-4 d-flex justify-content-center'>
                    <SearchBar
                        placeholder='Search companies...'
                        // value={value}
                        // onChange={(newValue) => onValueChanged(newValue)}
                        // disabled={showSelectedCompanies} 
                    />
                </div>
                <div className='row-sm-4 d-flex justify-content-center'>
                    <IndustryList industries={industries} />
                </div>
                {/* TODO: Add Companies Selected box */}
                <div className='row-sm-4 d-flex justify-content-center paddingTop60 paddingBottom20'>
                    <DropdownButton title='x companies selected'/>
                </div>
            </div>
        </div>
    )
}