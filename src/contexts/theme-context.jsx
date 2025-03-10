import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const themes = {
    light:{
        color: '#000',
        backgroundColor: '#fff',
    },
    dark: {
        color: '#fff',
        backgroundColor: '#595959',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = ({children})=>{

    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}