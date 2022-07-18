import React from 'react'
import IndustryGroupDropdown from './industry_group_dropdown'
import AsxIndustryGroups from '../../data/asx_industry_groups'
import AsxIndustryTitles from '../../data/asx_industry_titles'

import List from '@material-ui/core/List'

export default function IndustryGroupList() {
    return (
        <List style={{ paddingTop: 10 }}>
            {Object.keys(AsxIndustryGroups).map((item) => {                
                return <IndustryGroupDropdown 
                    key={item}
                    title={AsxIndustryTitles[item]}
                    items={AsxIndustryGroups[item]} />
            })}
        </List>
    )
}
