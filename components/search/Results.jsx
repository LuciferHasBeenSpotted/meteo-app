import React, { useState, useEffect, useContext } from 'react';
import { View, ActivityIndicator, FlatList, TouchableHighlight, Text, Dimensions } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import fetchWeather from './utils/fetchWeather.js'
import Row from './utils/Row';
import { Context } from '../utils/Context.jsx';
import styles from '../../utils/styles'

export default function Results({ city, nbDay, route, mode }) {
    const [results, setResults] = useState(null);
    if(!mode) mode = 'results'
    if(mode == 'results') { 
        city = route.params.city;
        nbDay = route.params.nbDay;
    }
    const { theme, darkmode, fav, setFav } = useContext(Context);
    const navigation = useNavigation();

    useEffect(() => {
        async function getResults() {
            setResults(await fetchWeather(city, nbDay))
        }
        getResults();
    }, [fav, city, nbDay]);


    useFocusEffect(
        React.useCallback(() => {
            navigation.setOptions({
                headerStyle: {
                    backgroundColor: theme,
                }
            });
        }, [theme])
    );

    function handleOnPress() {
        async function sousHandle() {
            if(fav && city && fav.toLowerCase() == city.toLowerCase()) {
                setFav('');
                AsyncStorage.removeItem('fav')
            }else {
                await AsyncStorage.setItem('fav', city);
                setFav(city)
            }
        }
        sousHandle();
    }

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
            <View style={{height: Dimensions.get('window').height * 0.55}}>
                {mode == 'results' ? (
                    <TouchableHighlight
                        style={{
                            height: 30,
                            backgroundColor: theme,
                        }}
                        onPress={handleOnPress}
                        underlayColor='none'
                    >
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 15, textAlign: "center", color: "white", fontWeight: '700' }}>
                                {fav == city ? 'Retirer des' : 'Ajouter aux'} favoris ?
                                </Text>
                        </View>
                    </TouchableHighlight>
                ) : null}

                <FlatList
                    data={results}
                    keyExtractor={(item) => item.date}
                    renderItem={({ item, index }) => <Row item={item} index={index} />}
                    bounces={false}
                    style={darkmode ? styles.darkmode : 'white'}
                />
            </View>
        );
    }
}
