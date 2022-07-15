import React from 'react'
import IndustryGroupItem from './industry_group_item'
import AsxIndustryGroups from '../../data/asx_industry_groups'
import AsxIndustryTitles from '../../data/asx_industry_titles'

import List from '@material-ui/core/List'

export default function IndustryGroupList() {
    return (
        <List style={{ paddingTop: 10 }}>
            {Object.keys(AsxIndustryGroups).map((item) => {                
                return <IndustryGroupItem 
                    key={item}
                    title={AsxIndustryTitles[item]}
                    items={AsxIndustryGroups[item]} />
            })}
        </List>
    )
}
