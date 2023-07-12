import { useContext, useCallback  } from "react";
import { View, Text, Button, Platform } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ColorContext } from "../utils/ColorContext";

import styles from "../../utils/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ResetColor() {
    const navigation = useNavigation();
    const { theme, darkmode, setTheme } = useContext(ColorContext);

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: theme
                }
            });
        })
    );

    async function submit() {
        setTheme('#a2273C');
        await AsyncStorage.setItem('theme', '#a2273C');
    }

    return (
        <View style={[{flex: 1, justifyContent: 'flex-start', padding: 20},
            darkmode ? styles.darkmode : {backgroundColor: 'white'}]}
        >
            <Text style={{color: '#a2273C', fontSize: 22, textAlign: 'center', marginBottom: 50}}>Vous êtes sur le point de réinitialiser le thème de votre application</Text>
            <View  
                style={{
                    borderColor: Platform.OS == 'ios' ? darkmode ? theme : 'black' : theme, borderWidth: 1}}>
                <Button title="Réinitialiser" color="transparent" onPress={submit}/>
            </View>
        </View>
    
        
    )
}

//Platform = Ios
//darkmode = True
//theme &!= 'black'

//Platform != Andoid
//