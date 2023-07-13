import { View, Text, Image, StyleSheet } from 'react-native';
import { useContext } from 'react';
import moment from 'moment';
import 'moment/locale/fr';

import styles from '../../../utils/styles';
import SlideInView from '../../animations/SlideInView';
import { Context } from '../../utils/Context'

moment.locale('fr');
export default function Row({ item, index }) {
    const { theme } = useContext(Context)

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
            <View style={[style.view_row, {backgroundColor: theme}]}>
                <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                >
                    <Image source={{ uri: `https:${icon}` }} style={{ width: 50, height: 50 }} />
                    <Text style={{ marginLeft: 10 }}>{day()} {date()}</Text>
                </View>
                <Text style={[{
                        fontWeight: 'bold', fontSize: 22}, 
                        styles.white
                        ]}
                >{Math.round(item.day.avgtemp_c)}°C</Text>
            </View>
        </SlideInView>
);
}

const style = StyleSheet.create({
    view_row: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
})
