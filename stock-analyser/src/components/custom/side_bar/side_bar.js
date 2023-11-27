import { useState, useEffect } from 'react'
import SearchBar from '../common/elements/search_bar'

import DropdownButton from '../common/buttons/dropdown_button'
import IndustryList from './industry_list'
import { SectorGroups } from '../../data/enums/sectors' 


export default function SideBar() {
    const [industries, setIndustries] = useState([])

    // Set industries
    useEffect(() => {
        const industries = []
        for (const [industry] of Object.entries(SectorGroups)) {
          industries.push(industry)
        }
        setIndustries(industries)
      }, [])

    return (
        <div className='width300 midGreyBackground'>
            <div className='container paddingTop60 height100p'>
                <div className='row-sm-4 d-flex justify-content-center'>
                    <SearchBar
                        placeholder='Search companies...'
                        // value={value}
                        // onChange={(newValue) => onValueChanged(newValue)}
                        // disabled={showSelectedCompanies} 
                    />
                </div>
                <div className='row-sm-4 d-flex justify-content-center height400 overflow-y-auto'>
                    <IndustryList industries={industries} />
                </div>
                {/* TODO: Add Companies Selected box */}
                <div className='relative row-sm-4 d-flex justify-content-center marginTop50'>
                    <DropdownButton title='x companies selected'/>
                </div>
            </div>
        </div>
    )
}