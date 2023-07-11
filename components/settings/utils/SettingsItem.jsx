import { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Link } from '@react-navigation/native';

import { ColorContext } from "../../utils/ColorContext";
import styles from "../../../utils/styles";

export default function SettingsItem({screenName, children}) {
    const { theme, darkmode } = useContext(ColorContext);
    return (
        <View>    
            <Link to={{screen: screenName}} 
                style={[
                    style.row_settings, 
                    {color: darkmode ? 'white' : theme},
                    darkmode ? styles.clairDarkmode : {backgroundColor: 'white'} 
                ]}
            >
            <Text>{children}</Text></Link>
        </View>
    )
}

const style = StyleSheet.create({
    row_settings: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center'
    }
})