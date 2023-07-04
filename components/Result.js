import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import moment from 'moment';

import Row from './Row';
import styles from '../styles';

export default function Result({ route }) {
  const { city } = route.params;
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = () => {
    axios
      .get(`https://api.weatherapi.com/v1/forecast.json?key=1a5193fc496849f8aca13845230407&q=${city}&days=14`)
      .then((response) => setResults(response.data.forecast.forecastday))
      .catch((error) => console.log('Error fetching weather:', error));
  };
  

  if (results === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={styles.color} size='large' style={styles.indicator}/>
      </View>
    );
  } else {
    return (
      <FlatList
        data={results}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <Row item={item}/>
        )}
      />
    );
  }
}
