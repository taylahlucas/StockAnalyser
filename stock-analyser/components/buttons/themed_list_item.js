import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import baseButtonTheme from '../../styles/mui_themes'

const propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

const defaultProps = {
    title: '',
    onClick: undefined
}

function ThemedListItem(props) {
    return (
        <ThemeProvider theme={baseButtonTheme}>
            <CssBaseline />
            <ListItem button onClick={props.onClick}>{props.title}</ListItem>  
        </ThemeProvider>
    )
}

ThemedListItem.propTypes = propTypes
ThemedListItem.defaultProps = defaultProps

export default ThemedListItem