import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'

const propTypes = {
    placeholder: PropTypes.string
}

const SearchBar = (props) => {
    return (
        <TextField id='standard-basic' placeholder={props.placeholder} />
    ) 
}

SearchBar.propTypes = propTypes

export default SearchBar