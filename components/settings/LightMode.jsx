import { useState, useContext, useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import ListItem from './ListItem';
import { ColorContext } from '../utils/ColorContext';
import styles from '../../utils/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LightMode() {
    const [selectedItem, setSelectedItem] = useState();
    const navigation = useNavigation();
    const { theme, darkmode, setDarkmode } = useContext(ColorContext);

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: theme
                }
            });
        })
    );


    async function handlePress(item) {
        setSelectedItem(item);
        if(item == 'dark') {
            setDarkmode(true);
            await AsyncStorage.setItem('darkmode', 'true');
        }else {
            setDarkmode(false);
            await AsyncStorage.setItem('darkmode', 'false')
        } 
    };

    return (
        <View 
            style={[ {flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start'},
                darkmode ? styles.darkmode : {backgroundColor: 'white'}
            ]}
        >
            <ListItem
                item="Mode clair"
                isSelected={selectedItem == 'light'}
                onPress={() => handlePress('light')}        
            />
            <ListItem
                item="Mode sombre"
                isSelected={selectedItem == 'dark'}
                onPress={() => handlePress('dark')}
            />
        </View>
    );
};