import { View, Text, Image } from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';

import styles from '../../styles';
import SlideInView from '../animations/SlideInView';

moment.locale('fr');

export default function Row({ item, index }) {

    function day ()  {
        const day = moment(new Date(item.date).getTime()).format('ddd');
        return <Text style={[styles.white, styles.bold]}>{day.toUpperCase()}</Text>;
    };

    function date() {
        const date = moment(new Date(item.date).getTime()).format('DD/MM');
        return <Text>{date}</Text>;
    };

    const { icon } = item.day.condition;

    return (
        <SlideInView index={index}>
            <View style={[styles.view_row, styles.flex]}>
                <View style={styles.flex}>
                    <Image source={{ uri: `https:${icon}` }} style={{ width: 50, height: 50 }} />
                    <Text style={{ marginLeft: 10 }}>{day()} {date()}</Text>
                </View>
                <Text style={styles.temp_row}>{Math.round(item.day.avgtemp_c)}°C</Text>
            </View>
        </SlideInView>
);
}
