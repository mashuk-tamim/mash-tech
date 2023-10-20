import { createContext, useState } from "react";


export const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(true);

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