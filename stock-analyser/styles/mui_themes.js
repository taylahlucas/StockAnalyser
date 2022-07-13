import { createTheme } from "@material-ui/core/styles";

const baseButtonTheme = createTheme({
    overrides: {
        MuiButton: {
            root: {
                width: 300,
                height: 40,
                background: '#2F2A36',
                borderRadius: 5,
                '& $label': {
                    fontFamily: 'Avenir Next',
                    fontSize: 14,
                    color: '#E9E9E9',
                    textTransform: 'uppercase'
                }
            }
        },
        MuiListItem: {
            root: {
                width: 300,
                height: 40,
                background: '#2F2A36',
                borderRadius: 5,
                // Label properties
                fontFamily: 'Avenir Next',
                fontSize: 14,
                color: '#E9E9E9',
                textTransform: 'uppercase',
                justifyContent: 'center'
            }
        }
    }
})

export default baseButtonTheme
