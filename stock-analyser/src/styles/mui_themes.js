import { createTheme } from "@material-ui/core/styles";

const baseTheme = createTheme({
    palette: {
        background: {
            default: '#14131A'
        }
    },
    overrides: {
        MuiButton: {
            root: {
                width: 250,
                height: 40,
                background: '#2F2A36',
                borderRadius: 2,
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
                width: 230,
                minHeight: 30,
                marginLeft: 20,
                background: '#727276',
                // Label properties
                fontFamily: 'Avenir Next',
                fontSize: 10,
                color: '#E9E9E9',
                textTransform: 'uppercase',
                justifyContent: 'left'
            }
        },
        MuiTextField: {
            root: {
                width: '280px', 
                height: '35px', 
                backgroundColor: 'transparent'
            }
        }
    }
})

export default baseTheme