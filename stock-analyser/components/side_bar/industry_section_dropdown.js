import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Collapse, List } from '@material-ui/core'

import ThemedListItem from '../buttons/themed_list_item'
import CompanyList from './company_list'


const propTypes = {
    items: PropTypes.object,
    isOpen: PropTypes.bool
}

const defaultProps = {
    isOpen: false
}

const IndustrySectionDropdown = (props) => {
    const [isOpen, setOpenMenu] = useState(false)

    return(
            <List style={{ marginTop: -10 }}>
                {Object.values(props.items).map((item) => {
                    return <div>
                        <ThemedListItem 
                            key={item}
                            title={item}
                            onClick={() => setOpenMenu(!isOpen)}
                        />
                        {/* TODO: Need to only open selected component */}
                        <Collapse in={isOpen}>
                            <CompanyList item={item} />
                        </Collapse>
                    </div>
                })}
            </List>
    )
}

IndustrySectionDropdown.propTypes = propTypes
IndustrySectionDropdown.defaultProps = defaultProps

export default IndustrySectionDropdown