import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { ListItem  } from '@material-ui/core'
import baseTheme from '../../../../public/styles/mui_themes'

const propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

const defaultProps = {
    title: '',
    onClick: undefined
}
// TODO: Style this to look like designs
function ThemedListItem(props) {
    return (
        <ThemeProvider theme={baseTheme}>
            <CssBaseline />
            <ListItem button onClick={props.onClick}>{props.title}</ListItem>  
        </ThemeProvider>
    )
}

ThemedListItem.propTypes = propTypes
ThemedListItem.defaultProps = defaultProps

export default ThemedListItem