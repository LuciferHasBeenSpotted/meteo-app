import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

export default function ListItem({ item, isSelected, onPress }) {
    return (
        <TouchableOpacity
          style={[styles.item, isSelected ? styles.selectedItem : null]}
          onPress={onPress}
        >
          <Text style={[isSelected ? styles.selectedText : null, {textAlign: 'center'}]}>{item}</Text>
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
    fontWeight: 'bold',
  },
});
