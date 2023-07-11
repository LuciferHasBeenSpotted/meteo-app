import { useContext, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { ColorContext } from '../utils/ColorContext';
import styles from '../../utils/styles';

export default function Settings() {
    const { theme, darkmode } = useContext(ColorContext);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: theme,
                },
                headerTitleStyle: {
                    textAlign: 'center',
                    alignSelf: 'center',
                  },
            
            });
        }, [theme])
    );
    
    return <View style={[
                    {flex: 1}, 
                    darkmode ? styles.darkmode : {backgroundColor: 'white'},

                ]}>
        <Link to={{screen: "ColorPick"}} 
            style={[
                style.row_settings, 
                {color: darkmode ? 'white' : theme},
                darkmode ? styles.clairDarkmode : {backgroundColor: 'white'} 
            ]}
        >
        <Text>Changer la couleur de l'application</Text></Link>
        <Link to={{screen: "LightMode"}} 
            style={[
                style.row_settings, 
                {color: darkmode ? 'white' : theme},
                darkmode ? styles.clairDarkmode : {backgroundColor: 'white'} 
            ]}
        >
        <Text>Mode clair/sombre</Text></Link>
    </View>
}

const style = StyleSheet.create({
    row_settings: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center'
    }
})