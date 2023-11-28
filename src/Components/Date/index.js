import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

const DateFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handlePress = (filter) => {
    setSelectedFilter(filter);
    // Here, you would also add logic to filter your feed based on the selected filter
  };

  const isSelected = (filter) => {
    return selectedFilter === filter;
  };

  return (
    <View style={styles.container}>
      {['Today', 'Tomorrow', 'This week'].map((filter, index) => (
        <Pressable
          key={index}
          style={[styles.button, isSelected(filter) && styles.selectedButton]}
          onPress={() => handlePress(filter)}>
          <Text style={[styles.buttonText, isSelected(filter) && styles.selectedButtonText]}>
            {filter}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  selectedButton: {
    backgroundColor: 'black', // Style for selected button
  },
  selectedButtonText: {
    color: 'white', // Text color for selected button
  },
  title: {
    fontSize: 24,
    fontWeight: '350',
    color: '#fff',
    width: '80%',
    marginLeft: 45,
    marginTop: 70,
  },
  titleMain: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
    padding: 10,
    alignSelf: 'center',
    marginLeft: 230,
  },
  titleSecond: {
    fontSize: 24,
    fontWeight: '350',
    color: '#fff',
    width: '80%',
    marginLeft: 45,
    marginTop: 30,
  },
  background: {
    flex: '1',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#40DA46',
    width: 270,
    height: 45,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '350',
    color: '#fff',
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  iconLeft: {
    width: 25,
    height: 25,
    marginRight: 30,
  },
  iconRight: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  filterButton: {
    position: 'absolute',
    right: 20,
    top: 80,
    zIndex: 101,
  },
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonReset: {
    backgroundColor: '#fff',
    width: 100,
    height: 55,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 45,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    flexGrow: 1,
  },
  buttonApply: {
    backgroundColor: '#40DA46',
    width: 150,
    height: 55,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    flexGrow: 1,
  },
  buttonTextReset: {
    color: '#000',
    fontWeight: '450',
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 65,
    left: 20,
    zIndex: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '70%',
    alignItems: 'center',
  },
  // Add any other styles you might need
});

export default DateFilter;

