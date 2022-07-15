import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ThemedListItem from '../buttons/themed_list_item'
import AsxIndustryGroups from '../../data/asx_industry_groups'
import { List } from '@material-ui/core'


const propTypes = {
    items: PropTypes.object,
    isOpen: PropTypes.bool
}

const defaultProps = {
    isOpen: false
}

const IndustrySectionItem = (props) => {
    return(
            <List>
                {Object.values(props.items).map((item) => {
                    return <ThemedListItem 
                        key={item}
                        title={item}
                    />
                })}
            </List>
    )
}

IndustrySectionItem.propTypes = propTypes
IndustrySectionItem.defaultProps = defaultProps

export default IndustrySectionItem