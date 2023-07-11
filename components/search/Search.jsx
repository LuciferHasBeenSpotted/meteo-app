import { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ColorContext } from '../utils/ColorContext';
import styles from '../../utils/styles';

export default function Search() {
    const [city, setCity] = useState('Paris');
    const { theme, darkmode } = useContext(ColorContext);
    
    const updateCity = city => setCity(city);

    const navigation = useNavigation();

    function submit() {
        navigation.navigate('Results', {city: city});
    };

    return (
        <View style={[{flex: 1, padding: 20}, darkmode ? styles.darkmode : {backgroundColor: 'white'}]}>
            <TextInput
                style={[{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 20,
                    color: darkmode ? 'white' : 'black'
                    }, 
                ]}
                value={city}
                onChangeText={updateCity}
                textAlign='center'
            />
            <Button
                title='Rechercher cette ville'
                onPress={submit}
                color={theme}
            />
        </View>
    );
}
