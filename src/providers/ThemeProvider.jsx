import { createContext, useState } from "react";


export const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {
    const storedTheme = localStorage.getItem("theme");
    const [isDark, setIsDark] = useState(storedTheme === "dark" ? true : false);

    const themeInfo= {
        isDark,
        setIsDark
    }

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;