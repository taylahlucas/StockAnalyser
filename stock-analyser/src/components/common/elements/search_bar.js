import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'

const propTypes = {
    placeholder: PropTypes.string
}

function SearchBar(props) {
    return (
        <TextField 
            id='standard-basic' 
            placeholder={props.placeholder} 
            style={{ width: 265, borderColor: 'purple' }}
            variant='standard'
            // TODO: Change border colour
        />
    ) 
}

SearchBar.propTypes = propTypes

export default SearchBar