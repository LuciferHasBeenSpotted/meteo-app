import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import ListItem from './ListItem';

export default function LightMode() {
  const [selectedItem, setSelectedItem] = useState('system');

  function handlePress(item) {
    setSelectedItem(item);
  };

  return (
    <View style={styles.container}>
      <ListItem
        item="light"
        isSelected={selectedItem === 'light'}
        onPress={() => handlePress('light')}
      />
      <ListItem
        item="dark"
        isSelected={selectedItem === 'dark'}
        onPress={() => handlePress('dark')}
      />
      <ListItem
        item="system"
        isSelected={selectedItem === 'system'}
        onPress={() => handlePress('systeme')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30
  }
});
