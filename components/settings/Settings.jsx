import { useContext, useCallback } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import SettingsItem from './utils/SettingsItem';
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
    
    return (
        <View style={[
                {flex: 1}, 
                darkmode ? styles.darkmode : {backgroundColor: 'white'},
            ]}
        >
            <SettingsItem screenName='ColorPick'>
                <Text>Changer la couleur de l'application</Text>
            </SettingsItem>

            <SettingsItem screenName='LightMode'>
                <Text>Mode clair/sombre</Text>
            </SettingsItem>
            <SettingsItem screenName='ResetColor'>
                <Text>Réinitialiser la couleur de l'application</Text>
            </SettingsItem>
        </View>
    )
}