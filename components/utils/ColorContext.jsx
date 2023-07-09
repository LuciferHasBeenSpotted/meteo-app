import { createContext, useState } from "react";

import styles from "../../styles";

export const ColorContext = createContext()
export function ColorProvider({ children }) {
    const [theme, setTheme] = useState(styles.color);
    const [darkmode, setDarkmode] = useState(false);
    
    return (
        <ColorContext.Provider value={{ theme, setTheme, darkmode, setDarkmode }}>
            {children}
        </ColorContext.Provider>
    );
}