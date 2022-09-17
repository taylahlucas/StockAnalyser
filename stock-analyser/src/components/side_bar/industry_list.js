import React from 'react'
import List from '@mui/material/List'

import SectorDropDown from './sector_dropdown'
import AsxIndustryGroups from '../../utils/enums/asx_industry_groups'
import AsxIndustryTitles from '../../utils/enums/asx_industry_titles'

export default function IndustryList() {
    // Get list of sectors for each industry
    const getSectorList = (industry) => {
        var listItems = []
        Object.entries(AsxIndustryGroups[industry]).map((sector) => {
            listItems.push({ value: sector[0], name: sector[1] })
        })
        return listItems
    }
    
    return (
        <List style={{ paddingTop: 20 }}>
            {Object.keys(AsxIndustryGroups).map((item) => {            
                return <SectorDropDown 
                    key={item} 
                    id={item}
                    className='text-center paddingTop10'
                    title={AsxIndustryTitles[item]}
                    options={getSectorList(item)}
                />
            })}
        </List>
    )
}