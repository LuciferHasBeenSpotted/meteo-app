import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    color: '#a2273C',
    white: { color: 'white' },
    bold: { fontWeight: 'bold' },
    view_app: {
        flex: 1,
    },
    view_search: {
        margin: 20
    },
    temp_row: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22
    },
    input_search: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20
    },
    container: {
        margin: 20
    },
    indicator: {
        margin: 20
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export function updateColor(color) {
    styles.color = color;
}

export default styles;
