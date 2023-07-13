import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext()
export function ColorProvider({ children }) {
    const [theme, setTheme] = useState();
    const [darkmode, setDarkmode] = useState();
    const [fav, setFav] = useState();
    
    useEffect(() => {
        async function loadContextContent() {
            const theme = await AsyncStorage.getItem('theme');
            const darkmode = await AsyncStorage.getItem('darkmode');
            const fav_ = await AsyncStorage.getItem('fav');
            
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
            if(fav_) setFav(fav_);
        }
        loadContextContent();
    }, [theme, darkmode, fav]);
    
    return (
        <Context.Provider value={{ theme, setTheme, darkmode, setDarkmode, fav, setFav }}>
            {children}
        </Context.Provider>
    );
}