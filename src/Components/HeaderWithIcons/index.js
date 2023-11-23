import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure to import the correct icon set

const HeaderWithIcons = ({ onBackPress, onSearchPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress}>
        <Icon name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Pursuits</Text>
      <TouchableOpacity onPress={onSearchPress}>
        <Icon name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000', // Adjust the color to match your theme
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // ... any other styles you need
});

export default HeaderWithIcons;
