import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

const propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

const defaultProps = {
    title: '',
    onClick: undefined
}

function DropdownButton(props) {
    return (
        <Button onClick={props.onClick}>{props.title}</Button>  
    )
}

DropdownButton.propTypes = propTypes
DropdownButton.defaultProps = defaultProps

export default DropdownButton