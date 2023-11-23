import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { title: 'Movies', key: 'movies', color: '#FF6347', details: '20+ movies\nNear you' },
  { title: 'Events', key: 'events', color: '#FFD700', details: '10 concerts\nNear you' },
  { title: 'Comedy', key: 'comedy', color: '#FFA500', details: '15 shows\nNear you' },
  { title: 'Sports', key: 'sports', color: '#3CB371', details: '5 Events\nNear you' },
  { title: 'Upskill & Training', key: 'upskill', color: '#1E90FF', details: '2 events\nCentre' },
  { title: 'Esports Centre', key: 'esports', color: '#9370DB', details: '3 events\nNear you' },
  // Add more categories as needed
];

const CategoryButton = ({ title, color, details, onPress, selected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.categoryButton,
        { backgroundColor: selected ? '#7e0202' : color } // Use color from the item
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
      <Text style={styles.detailsText}>{details}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('movies');

  const renderCategoryButton = ({ item }) => (
    <CategoryButton
      title={item.title}
      color={item.color}
      details={item.details}
      onPress={() => setSelectedCategory(item.key)}
      selected={item.key === selectedCategory}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderCategoryButton}
      keyExtractor={(item) => item.key}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

const styles = StyleSheet.create({
  categoryButton: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    height: 170, // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10, // Added padding for inner spacing
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 4, // Space between title and details
  },
  detailsText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  // ... other styles
});

export default Categories;
