import PropTypes from 'prop-types'
import Button from '@mui/material/Button'


const propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

const DropdownButton = (props) => {
    return (
        <Button onClick={props.onClick}>{props.title}</Button>  
    )
}

DropdownButton.propTypes = propTypes

export default DropdownButton