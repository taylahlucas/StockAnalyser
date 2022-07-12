import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import baseButtonTheme from '../../styles/mui_themes'
import { CssBaseline } from '@material-ui/core'

const propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    isOpen: PropTypes.bool
}

const defaultProps = {
    isOpen: false
}

const IndustrySectionItem = (props) => {
    return(
        <div>

        </div>
    )
}

IndustrySectionItem.propTypes = propTypes
IndustrySectionItem.defaultProps = defaultProps

export default IndustrySectionItem