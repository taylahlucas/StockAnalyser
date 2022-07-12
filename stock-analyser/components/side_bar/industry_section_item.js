import React, { useState } from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import AsxIndustryGroups from '../../data/asx_industry_groups'


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
        <List>
            {props.industries.map((item) => {
                return <ListItemText primary={item.value} />
            })}
        </List>
    )
}

IndustrySectionItem.propTypes = propTypes
IndustrySectionItem.defaultProps = defaultProps

export default IndustrySectionItem