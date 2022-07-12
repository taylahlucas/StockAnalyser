import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import IndustryGroupItem from './industry_group_item'
import AsxIndustryGroups from '../../data/asx_industry_groups'
import AsxIndustryTitles from '../../data/asx_industry_titles'

const propTypes = {
    companies: PropTypes.arrayOf(PropTypes.object),
    industries: PropTypes.arrayOf(PropTypes.string),
    searchResults: PropTypes.arrayOf(PropTypes.object)
}

const defaultProps = {
    companies: null,
    industries: null,
    searchResults: null
}

export default function CompanyList(props) {
    const [activeMenu, setMenu] = useState(undefined)
    const [industries, setIndustries] = useState(Object.keys(AsxIndustryGroups))

    const setActiveMenu = (menu) => {
        setMenu(menu)
    }
    
    return (
        <div>
            {industries.map((item) => {
                console.log("ITEM: ", AsxIndustryGroups[item])
                return <IndustryGroupItem 
                    key={item}
                    title={AsxIndustryTitles[item]}
                    items={AsxIndustryGroups[item]} />
            })}
        </div>
    )
}

// {props.industries.map((item) => {
//     const companyItems = props.companies.filter((companyItem) => {
//         for (let sector in AsxIndustryGroups[item]) {
//             if (companyItem.sector === AsxIndustryGroups[item][sector]) {
//                 if (props.searchResults.length > 0) {
//                     if (props.searchResults.includes(companyItem)) {
//                         return companyItem
//                     }
//                 }
//                 else {
//                     return companyItem
//                 }
//             }
//         }
//     })
//     // Menu Item
//     if (companyItems.length > 0) {
//         return <DropDownItem 
//             key={item}
//             title={AsxIndustryTitles[item]} 
//             items={companyItems}
//             onAddCompany={(item) => props.onCompanyAdded(item)}
//             onRemoveCompany={(item) => props.onCompanyRemoved(item)}
//             setActiveMenu={(menu) => setActiveMenu(menu)}
//             isOpen={activeMenu === AsxIndustryTitles[item] ? true : false}
//             disabled={props.disabled} />
//     }
// })}