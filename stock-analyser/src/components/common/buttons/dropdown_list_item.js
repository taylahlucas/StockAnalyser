import PropTypes from 'prop-types'
import { ThemeProvider, CssBaseline, ListItem  } from '@mui/material'
import { baseTheme, subItemTheme } from '../../../styles/mui_themes'

const propTypes = {
    title: PropTypes.string,
    variant: PropTypes.oneOf([
        'standard',
        'small'
    ]),
    onClick: PropTypes.func
}

const defaultProps = {
    title: '',
    variant: 'standard',
    onClick: undefined
}

function DropdownListItem(props) {
    let customTheme =  baseTheme

    switch (props.variant) {
        case 'small':
            customTheme = subItemTheme
            break

        case 'standard':
            customTheme = baseTheme
            break
             
        default: 
            break
    }
    console.log("CUSTOM THEME: ", customTheme)
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <ListItem button onClick={props.onClick}>{props.title}</ListItem>  
        </ThemeProvider>
    )
}

DropdownListItem.propTypes = propTypes
DropdownListItem.defaultProps = defaultProps

export default DropdownListItem