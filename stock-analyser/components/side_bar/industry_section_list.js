import React from 'react'
import PropTypes from 'prop-types'
import { List } from '@material-ui/core'

import IndustrySectionDropdown from './industry_section_dropdown'


const propTypes = {
    items: PropTypes.object,
    isOpen: PropTypes.bool
}

const defaultProps = {
    isOpen: false
}

const IndustrySectionList = (props) => {
    return(
            <List style={{ paddingTop: 10 }}>
                {Object.values(props.items).map((item) => {
                    return <IndustrySectionDropdown
                        key={item}
                        title={item} />
                })}
            </List>
    )
}

IndustrySectionList.propTypes = propTypes
IndustrySectionList.defaultProps = defaultProps

export default IndustrySectionList