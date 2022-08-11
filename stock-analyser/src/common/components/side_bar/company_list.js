import React from 'react'

import PropTypes from 'prop-types'
import { List } from '@material-ui/core'
import DropdownListItem from '../buttons/dropdown_list_item'

const propTypes = {
    items: PropTypes.array,
    isOpen: PropTypes.bool
}

const defaultProps = {
    isOpen: false
}

const CompanyList = (props) => {
    return(
        <List>
            {props.items.map((item) => {
                return <DropdownListItem 
                    key={item.asxCode}
                    title={item.companyName}
                />
            })}
        </List>
    )
}

CompanyList.propTypes = propTypes
CompanyList.defaultProps = defaultProps

export default CompanyList

