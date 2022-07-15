import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ToggleButton from '../buttons/ToggleButton'
import Aux from '../aux/Aux'

const propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    isOpen: PropTypes.bool
}

const defaultProps = {
    isOpen: false
}

const CompanyListItem = (props) => {
    const [isOpen, setOpenMenu] = useState(false)

    return(
        // TODO: Create new list item
        <div></div>
    )
}

CompanyListItem.propTypes = propTypes
CompanyListItem.defaultProps = defaultProps

export default CompanyListItem