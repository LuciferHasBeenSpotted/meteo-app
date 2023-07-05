import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../styles';

export default function Search() {
    const [city, setCity] = useState('Paris');

    const updateCity = city => setCity(city);

    const navigation = useNavigation();

    function submit() {
        navigation.navigate('Results', {city: city});
    };

    return (
        <View style={[styles.view_search, styles.container]}>
            <TextInput
                style={styles.input_search}
                value={city}
                onChangeText={updateCity}
                textAlign='center'
            />
            <Button
                title='Rechercher cette ville'
                onPress={submit}
                color={styles.color}
            />
        </View>
    );
}
