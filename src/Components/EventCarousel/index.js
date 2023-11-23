import React from 'react';
import { View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

// Dummy data array for the events

const eventsData = [
  {
    id: 'event1',
    date: '10 JUNE',
    title: 'International Band Music Concert',
    location: '36 Guild Street London, UK',
    image: './assets/images/img.png', // replace with your image paths or URIs
    price: '112€',
  },
  {
    id: 'event2',
    date: '10 JUNE',
    title: 'International Concert',
    location: '36 Guild Street London, UK',
    image: './assets/images/img.png', // replace with your image paths or URIs
    price: '112€',
  },
  {
    id: 'event2',
    date: '10 JUNE',
    title: 'International Concert',
    location: '36 Guild Street London, UK',
    image: './assets/images/img.png', // replace with your image paths or URIs
    price: '112€',
  },
  {
    id: 'event2',
    date: '10 JUNE',
    title: 'International Concert',
    location: '36 Guild Street London, UK',
    image: './assets/images/img.png', // replace with your image paths or URIs
    price: '112€',
  },
  // ... more events
];
const EventCard = ({ event, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground source={{ uri: event.image }} style={styles.image}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{event.date}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{event.price}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.location}>{event.location}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const EventCarousel = () => {
  const handlePress = (eventId) => {
    // Here you can handle navigation to the event details screen
    console.log('Pressed event:', eventId);
  };

  const renderEventCard = ({ item }) => (
    <EventCard event={item} onPress={() => handlePress(item.id)} />
  );

  return (
    <FlatList
      data={eventsData}
      renderItem={renderEventCard}
      keyExtractor={(item) => item.id}
      horizontal={true} // Set to true to make the list horizontal
      showsHorizontalScrollIndicator={false} // Hide the scroll bar
    />
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: 'hidden', // issiaiskinti ka sitas reiskia
    margin: 10,
    width: 300, // Set a fixed width for each card
    height: 200, // Set a fixed height for each card
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between', // Align date top-right, details bottom-left
  },
  dateContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
    alignSelf: 'flex-start',
    margin: 10,
    padding: 5,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: '#000',
    fontWeight: 'bold',
  },
  details: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    padding: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  location: {
    color: '#fff',
    fontSize: 14,
  },
  priceContainer: {
    backgroundColor: '#40DA46', // Semi-transparent white background
    alignSelf: 'flex-start',
    margin: 10,
    padding: 5,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 250,
  },
  priceText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  // ... add styles for other elements
});

export default EventCarousel;
