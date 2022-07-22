import React, { useState } from 'react'
import { List, Collapse} from '@material-ui/core/List'

import SectorList from './sector_list'
import DropdownButton from '../buttons/dropdown_button'
import AsxIndustryGroups from '../../data/asx_industry_groups'
import AsxIndustryTitles from '../../data/asx_industry_titles'

export default function SearchResults() {
    const [isOpen, setOpenMenu] = useState(false)

    return (
        <List style={{ paddingTop: 10 }}>
            {/* List of industry groups */}
            {Object.keys(AsxIndustryGroups).map((item) => {  
                return <div key={item} className='center paddingTop10'>
                    <DropdownButton title={AsxIndustryTitles[item]} onClick={() => setOpenMenu(!isOpen)} />
                    <Collapse in={isOpen}>
                        <SectorList items={AsxIndustryGroups[item]} />
                    </Collapse>
                </div>              

            })}
        </List>
    )
}

// return <IndustryGroupDropdown 
// key={item}
// title={AsxIndustryTitles[item]}
// items={AsxIndustryGroups[item]} />