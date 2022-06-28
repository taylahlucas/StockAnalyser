import { createTheme } from "@material-ui/core/styles";

const baseButtonTheme = createTheme({
    overrides: {
        MuiButton: {
            root: {
                width: 200,
                height: 40,
                background: '#2F2A36',
                "& $label": {
                    fontFamily: "Avenir Next",
                    fontSize: 14,
                    color: '#E9E9E9',
                    textDecoration: "uppercased"
                }
            }
        }
    }
})

export default baseButtonTheme