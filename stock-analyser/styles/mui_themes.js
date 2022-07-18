import { createTheme } from "@material-ui/core/styles";

export const baseTheme = createTheme({
    overrides: {
        MuiButton: {
            root: {
                width: 300,
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
        }
    }
})

export const secondaryTheme = createTheme({
	...baseTheme,
	overrides: {
		MuiButton: {
			root: {
                width: 280,
                height: 30,
                marginLeft: 20,
                borderRadius: 1,
                background: '#727276',
                '& $label': {
                    fontFamily: 'Avenir Next',
                    fontSize: 10,
                    color: '#E9E9E9',
                    textTransform: 'uppercase',
                    justifyContent: 'left'
                }
            }
		}
	}
})