import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AsxIndustryGroups from '../../data/asx_industry_groups'

import ThemedListItem from '../buttons/themed_list_item'
import { List, ListItemText, ListItem, Collapse } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'


const propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    isOpen: PropTypes.bool
}

const defaultProps = {
    isOpen: false
}

const IndustrySectionItem = (props) => {
    const [industrySections, setIndustrySections] = useState(Object.keys(AsxIndustryGroups))
    // Need to create drop down
    return(
        <Collapse in={props.isOpen} collapsedSize={0}>
            <List>
                <ThemedListItem title='Company Name'/>
            </List>
        </Collapse>
        // <List>
        //     {props.items.map((sector) => {
        //         {Object.values(sector).map((item) => {
        //             // console.log("ITEMS: " + item)
        //             return <ListItem button>
        //                 <ListItemText primary={item} />
        //                 {props.isOpen ? <ExpandMore /> : <ExpandLess />}
        //                 <Collapse in={props.isOpen} timeout='auto' unmountOnExit>
        //                     <List component='div' disablePadding>
        //                         <ListItem button sx={{ pl: 4 }}>
        //                             <ListItemText primary='Company Name' />
        //                         </ListItem>
        //                     </List>
        //                 </Collapse>
        //             </ListItem>
        //         })}
        //     })}
        // </List>
    )
}

IndustrySectionItem.propTypes = propTypes
IndustrySectionItem.defaultProps = defaultProps

export default IndustrySectionItem