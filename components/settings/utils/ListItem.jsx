import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import { useContext } from "react";
import { ColorContext } from '../../utils/ColorContext';

export default function ListItem({ item, isSelected, onPress }) {
    const { theme, darkmode } = useContext(ColorContext);
    return (
        <TouchableOpacity
            style={[styles.item, 
                isSelected ? styles.selectedItem : null,
                { backgroundColor: darkmode ? '#4C4C4C' : 'white' }
            ]}
            onPress={onPress}
        >
            <Text style={[
                        isSelected ? [styles.selectedText, {color: theme}] 
                        : [{color: darkmode ? 'white' : 'black'}]
                        , {textAlign: 'center'}
                    ]}
            >{item}
            </Text>
        </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        margin: 5,
        width: Dimensions.get('window').width * 0.8,
        backgroundColor: '#FFF',
    },
    selectedItem: {
        backgroundColor: '#EFEFEF',
      },
    selectedText: {
        fontWeight: 'bold'
    },
});