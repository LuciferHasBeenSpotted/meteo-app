import { useState, useContext } from 'react';
import { View, TextInput, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Fav from './Fav';
import { Context } from '../utils/Context';
import styles from '../../utils/styles';

export default function Search() {

    const [city, setCity] = useState('Paris');
    const { theme, darkmode, fav } = useContext(Context);

    const updateCity = city => setCity(city);

    const navigation = useNavigation();

    function submit() {
        navigation.navigate('Results', {city: city, nbDay: 14});
    };

    return (
        <View style={[{height: Dimensions.get('window').height,padding: 20}, darkmode ? styles.darkmode : {backgroundColor: 'white'}]}>
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
            <Fav/>
        </View>
    );
}
