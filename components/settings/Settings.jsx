import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';
import { ColorContext } from '../utils/ColorContext';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export default function Settings() {
    const { theme } = useContext(ColorContext);
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
          navigation.setOptions({
            headerStyle: {
              backgroundColor: theme
            },
          });
        }, [theme])
      );

    return <View>
        <Link to={{screen: "ColorPick"}} style={[style.row_settings, {color: theme}]}><Text>Changer la couleur de l'application</Text></Link>
        <Link to={{screen: "LightMode"}} style={[style.row_settings, {color: theme}]}><Text>Mode clair/sombre</Text></Link>
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
