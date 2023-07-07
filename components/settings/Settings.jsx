import { View, Text, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';

import styles from '../../styles';

export default function Settings() {

    return <View>
        <Link to={{screen: "ColorPick"}} style={style.row_settings}><Text>Changer la couleur de l'application</Text></Link>
    </View>
}

const style = StyleSheet.create({
    row_settings: {
        backgroundColor: 'white',
        color: styles.color,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center'
    }
})
