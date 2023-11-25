import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";


// import movies from '/assets/images/movies.png';
// import eventsImage from './Pursuitsdemo/assets/images/events.png';
// import comedyImage from './Pursuitsdemo/assets/images/comedy.png';
// import sportsImage from './Pursuitsdemo/assets/images/sports.png';
// import upskillImage from './Pursuitsdemo/assets/images/upskill.png';
// import esportsImage from './Pursuitsdemo/assets/images/esports.png';

const data = [
  { title: 'Movies', key: 'movies', color: '#FF6347', details: '20+ movies\nNear you',  },
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
        { backgroundColor: selected ? color : color } // Use color from the item
      ]}
    >
      {/*<Image source={require()} style={styles.image}/>*/}
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
    width: 100,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  detailsText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Categories;
