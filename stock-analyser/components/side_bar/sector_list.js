import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { List, Collapse } from '@material-ui/core'

import CompanyList from './company_list'
import ThemedListItem from '../buttons/themed_list_item'

const propTypes = {
    items: PropTypes.object,
    isOpen: PropTypes.bool
}

const defaultProps = {
    isOpen: false
}

const SectorList = (props) => {
    const [isOpen, setOpenMenu] = useState(false)
    
    return(
        <List>
            {/* List of sections in industry group */}
            {Object.values(props.items).map((item) => {
                return  <div key={item}>
                    <ThemedListItem 
                        title={item}
                        onClick={() => setOpenMenu(!isOpen)}
                    />
                    {/* TODO: Need to only open selected component -- use ref? */}
                    <Collapse in={isOpen}>
                        <CompanyList item={item} />
                    </Collapse>
                </div>
            })}
        </List>
    )
}

SectorList.propTypes = propTypes
SectorList.defaultProps = defaultProps

export default SectorList