import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    color: '#a2273C',
    white: { color: 'white' },
    bold: { fontWeight: 'bold' },
    darkmode: { backgroundColor: "#2A2A2A"},
    clairDarkmode: { backgroundColor: '#4C4C4C' },
})

export function updateColor(color) {
    styles.color = color;
}

export default styles;