import React, { useState } from 'react'
import IndustryGroupItem from './industry_group_item'
import AsxIndustryGroups from '../../data/asx_industry_groups'
import AsxIndustryTitles from '../../data/asx_industry_titles'

import List from '@material-ui/core/List'

export default function IndustryGroupList() {
    const [industries, setIndustries] = useState(Object.keys(AsxIndustryGroups))

    return (
        <List>
            {industries.map((item) => {                
                return <IndustryGroupItem 
                    key={item}
                    title={AsxIndustryTitles[item]}
                    items={AsxIndustryGroups[item]} />
            })}
        </List>
    )
}
