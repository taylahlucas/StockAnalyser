import PropTypes from 'prop-types'
import { ListItem  } from '@material-ui/core'

const propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

const defaultProps = {
    title: '',
    onClick: undefined
}
// TODO: Style this to look like designs
function DropdownListItem(props) {
    return (
        <ListItem button onClick={props.onClick}>{props.title}</ListItem>  
    )
}

DropdownListItem.propTypes = propTypes
DropdownListItem.defaultProps = defaultProps

export default DropdownListItem