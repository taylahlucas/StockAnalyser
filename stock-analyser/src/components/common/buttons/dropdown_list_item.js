import PropTypes from 'prop-types'
import ListItem from '@mui/material/ListItem'

const propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
}

const defaultProps = {
    title: '',
    onClick: undefined
}
// TODO: Style this to look like designs
function DropdownListItem(props) {
    return (
        <ListItem 
            button 
            onClick={props.onClick}
            style={props.style}>{props.title}</ListItem>  
    )
}

DropdownListItem.propTypes = propTypes
DropdownListItem.defaultProps = defaultProps

export default DropdownListItem