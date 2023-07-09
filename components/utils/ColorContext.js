import { createContext, useState } from "react";

import styles from "../../styles";

export const ColorContext = createContext()
export function ColorProvider({ children }) {
    const [theme, setTheme] = useState(styles.color);
    return (
        <ColorContext.Provider value={{ theme, setTheme }}>
          {children}
        </ColorContext.Provider>
    );
}
