import React, { useState, useEffect, useContext } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import Row from './Row';
import { ColorContext } from '../utils/ColorContext';
import styles from '../../utils/styles'

export default function Results({ route }) {
    const { city } = route.params;
    const [results, setResults] = useState(null);
    const { theme, darkmode } = useContext(ColorContext);
    const navigation = useNavigation();

    useEffect(() => {
        fetchWeather()
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: theme,
                },
            });
        }, [theme])
    );


    function fetchWeather() {
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=1a5193fc496849f8aca13845230407&q=${city}&days=14`)
            .then((response) => setResults(response.data.forecast.forecastday))
            .catch((error) => console.log('erreur fetch Result.jsx', error));
    };

    if (results === null) {
        return (
            <View style={[
                { flex: 1 },
                darkmode ? styles.darkmode : { backgroundColor: 'white' }
            ]}>
              <ActivityIndicator color={theme} size='large' style={{margin: 20}}/>
            </View>
        );
    } else {
        return (
            <FlatList
                data={results}
                keyExtractor={(item) => item.date}
                renderItem={({ item, index }) => <Row item={item} index={index} />}
                bounces={false}
                style={darkmode ? styles.darkmode : 'white'}
            />
        );
    }
}
