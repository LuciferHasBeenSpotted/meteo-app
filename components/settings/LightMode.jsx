import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import ListItem from './ListItem';
import { ColorContext } from '../utils/ColorContext';
import styles from '../../styles';

export default function LightMode() {
    const [selectedItem, setSelectedItem] = useState('light');
    const navigation = useNavigation();
    const { theme, darkmode, setDarkmode } = useContext(ColorContext)

    useFocusEffect(
        React.useCallback(() => {
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: theme
                }
            })
        })
    )


    function handlePress(item) {
      setSelectedItem(item);
      if(item == 'dark') {
        setDarkmode(true)
      }else setDarkmode(false)
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
                item="light"
                isSelected={selectedItem === 'light'}
                onPress={() => handlePress('light')}        
            />
            <ListItem
                item="dark"
                isSelected={selectedItem === 'dark'}
                onPress={() => handlePress('dark')}
            />
        </View>
    );
};