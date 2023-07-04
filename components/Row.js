import { View, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';

import styles from '../styles';

moment.locale('fr');

export default function Row({ item }) {

    const day = () => {
        const day = moment(new Date(item.date).getTime()).format('ddd');
        return <Text style={[styles.white, styles.bold]}>{day.toUpperCase()}</Text>
    }

    const date = () =>  {
        const date = moment(new Date(item.date).getTime()).format('DD/MM');
        return <Text>{date}</Text>
    }

    const { icon } = item.day.condition;

    return (
    <View style={[styles.view_row, styles.flex]}>
        <View style={styles.flex}>
            <Image
                source={{ uri: `https:${icon}` }}
                style={{ width: 50, height: 50 }}
            />
            <Text style={{marginLeft: 10}}>{day()} {date()}</Text>
        </View>
        <Text style={styles.temp_row}>{Math.round(item.day.avgtemp_c)}°C</Text>
    </View>
    );
}
