import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    color: '#a2273C',
    white: { color: 'white' },
    bold: { fontWeight: 'bold' },
    view_app: {
        flex: 1,
    },
    view_search: {
        margin: 20
    },
    view_row: {
        backgroundColor: '#a2273C',
        borderWidth: 0,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between'
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