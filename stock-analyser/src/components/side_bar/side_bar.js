import { useState, useEffect } from 'react'
import SearchBar from '../common/elements/search_bar'

import DropdownButton from '../common/buttons/dropdown_button'
import IndustryList from './industry_list'
import AsxIndustryGroups from '../../utils/enums/asx_industry_titles'

export default function SideBar() {
    const [industries, setIndustries] = useState([])

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
            </div>
            <div className='relative row-sm-4 d-flex justify-content-center marginTop200'>
                <DropdownButton title='x companies selected'/>
            </div>
        </div>
    )
}