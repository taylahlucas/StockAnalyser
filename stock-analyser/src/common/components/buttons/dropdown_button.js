import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import { Button, Collapse, CssBaseline } from '@material-ui/core'
import { baseTheme, secondaryTheme } from '../../../styles/mui_themes'

const propTypes = {
    theme: PropTypes.oneOf([
        'primary',
        'secondary'
    ]),
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.object,
    items: PropTypes.object
}

const defaultProps = {
    theme: 'primary',
    title: '',
    isOpen: false,
    onClick: undefined
}

function DropdownButton(props) {
    const theme = props.theme == 'primary' ? baseTheme : secondaryTheme
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button onClick={props.onClick}>{props.title}</Button>
        </ThemeProvider>
    )
}
// onClick={props.onClick}
DropdownButton.propTypes = propTypes
DropdownButton.defaultProps = defaultProps

export default DropdownButton