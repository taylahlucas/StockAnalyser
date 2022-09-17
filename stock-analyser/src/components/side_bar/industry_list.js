import React, { useEffect } from 'react'
import List from '@mui/material/List'

import SectorDropDown from './sector_dropdown'
import { ParentSectors, SectorGroups } from '../../data/enums/sectors'

export default function IndustryList() {
    // Get list of sectors for each industry
    const getSectorList = (industry) => {
        var listItems = []
        Object.entries(SectorGroups[industry]).map((sector) => {
            listItems.push({ value: sector[0], name: sector[1] })
        })
        return listItems
    }
    
    return (
        <List style={{ paddingTop: 20 }}>
            {Object.keys(ParentSectors).map((item) => {            
                return <SectorDropDown 
                    key={item} 
                    id={item}
                    className='text-center paddingTop10'
                    title={ParentSectors[item]}
                    options={getSectorList(item)}
                />
            })}
        </List>
    )
}