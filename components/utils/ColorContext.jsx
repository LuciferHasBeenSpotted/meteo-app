import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ColorContext = createContext()
export function ColorProvider({ children }) {
    const [theme, setTheme] = useState();
    const [darkmode, setDarkmode] = useState();
    
    useEffect(() => {
        async function loadColor() {
            const theme = await AsyncStorage.getItem('theme');
            const darkmode = await AsyncStorage.getItem('darkmode');
            
            if(!theme) setTheme('#a2273C');
            else setTheme(theme);
            
            if(darkmode === 'true') {
                setDarkmode(true);
            }else if(darkmode === 'false') {
                setDarkmode(false)
            }else {
                await AsyncStorage.setItem('darkmode', 'false');
                setDarkmode(false);
            }
        }
        loadColor();
    });
    
    return (
        <ColorContext.Provider value={{ theme, setTheme, darkmode, setDarkmode }}>
            {children}
        </ColorContext.Provider>
    );
}