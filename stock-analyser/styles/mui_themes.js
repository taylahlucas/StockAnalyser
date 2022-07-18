import { createTheme } from "@material-ui/core/styles";

const baseThemes = createTheme({
    overrides: {
        MuiButton: {
            root: {
                width: 300,
                height: 40,
                background: '#2F2A36',
                borderRadius: 5,
                zIndex: 1,
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
                width: 280,
                height: 30,
                marginLeft: 20,
                background: '#727276',
                // Label properties
                fontFamily: 'Avenir Next',
                fontSize: 10,
                color: '#E9E9E9',
                textTransform: 'uppercase',
                justifyContent: 'left'
            }
        }
    }
})

export default baseThemes