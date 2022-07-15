import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import baseThemes from '../../styles/mui_themes'

const propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

const defaultProps = {
    title: '',
    onClick: undefined
}

function ThemedButton(props) {
    return (
        <ThemeProvider theme={baseThemes}>
            <CssBaseline />
            <Button onClick={props.onClick}>{props.title}</Button>  
        </ThemeProvider>
    )
}

ThemedButton.propTypes = propTypes
ThemedButton.defaultProps = defaultProps

export default ThemedButton