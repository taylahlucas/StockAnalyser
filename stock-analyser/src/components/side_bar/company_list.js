import React from 'react'

import PropTypes from 'prop-types'
import List from '@mui/material/List'
import DropdownListItem from '../common/buttons/dropdown_list_item'

const propTypes = {
    items: PropTypes.array,
    isOpen: PropTypes.bool
}

const defaultProps = {
    isOpen: false
}

const CompanyList = (props) => {
    return(
        <List style={{ marginTop: -8 }}>
            {props.items.map((item) => {
                return <DropdownListItem 
                    key={item.asxCode}
                    style={{ width: 200, marginLeft: 50, opacity: 0.6 }}
                    title={item.companyName}
                />
            })}
        </List>
    )
}

CompanyList.propTypes = propTypes
CompanyList.defaultProps = defaultProps

export default CompanyList

