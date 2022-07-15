import React from 'react'
import PropTypes from 'prop-types'

import { List } from '@material-ui/core'

const propTypes = {
    items: PropTypes.object,
    isOpen: PropTypes.bool
}

const defaultProps = {
    isOpen: false
}

const CompanyList = (props) => {
    return(
        <List>
            {/* // TODO: Add mock companies + check api */}
        </List>
    )
}

CompanyList.propTypes = propTypes
CompanyList.defaultProps = defaultProps

export default CompanyList