import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const baseTheme = createTheme({
    palette: {
        background: {
            default: '#14131A'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    width: 250,
                    height: 40,
                    background: '#2F2A36',
                    borderRadius: 2,
                    zIndex: 1,
                },
                text: {
                    fontFamily: 'Avenir Next',
                    fontSize: 14,
                    color: '#E9E9E9',
                    textTransform: 'uppercase'
                }
            }            
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    background: '#727276',
                    // Label properties
                    fontFamily: 'Avenir Next',
                    fontSize: 10,
                    color: '#E9E9E9',
                    textTransform: 'uppercase',
                    verticalAlign: 'middle',
                    justifyContent: 'left',
                    paddingTop: 10,
                    paddingBottom: 10
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontFamily: 'Avenir Next',
                    fontSize: 14,
                    color: 'white',
                    textTransform: 'uppercase',
                },
            }
        },
        MuiInput: {
            styleOverrides: {
                'input': {
                    paddingLeft: '15px',
                    fontFamily: 'Avenir Next',
                    color: '#E9E9E9',
                    opacity: 0.6,
                    '&::placeholder': {
                        fontSize: 16,
                        color: '#707070'
                    }
                }
            }
        }
    },
})

export default createTheme(baseTheme)