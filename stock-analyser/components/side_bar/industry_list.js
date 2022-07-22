// import React from 'react'
// import { Collapse } from '@material-ui/core'

// import DropdownButton from '../buttons/dropdown_button'
// import AsxIndustryGroups from '../../data/asx_industry_groups'
// import AsxIndustryTitles from '../../data/asx_industry_titles'

// import List from '@material-ui/core/List'

// export default function IndustryList() {
//     return (
//         <List style={{ paddingTop: 10 }}>
//             {/* List of industry groups */}
//             {Object.keys(AsxIndustryGroups).map((item) => {                
//                 return <div key={item} className='center paddingTop10'>
//                     <DropdownButton title={props.title} onClick={() => setOpenMenu(!isOpen)} />
//                     <Collapse in={isOpen}>
//                         <IndustrySectionDropdown items={props.items} />
//                     </Collapse>
//                 </div>
//             })}
//         </List>
//     )
// }