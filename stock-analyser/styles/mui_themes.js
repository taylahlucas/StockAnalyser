import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

// TODO: Fix mui themes
const standardButtonDisabled = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                "& $label": {
                    fontFamily: "Avenir Next",
                    fontSize: '14px',
                    color: '#E9E9E9',
                    textDecoration: "uppercased"
                }
            }
        },
        palette: {
            primary: {
                main: "#2F2A36"
            }
        }
    }
})