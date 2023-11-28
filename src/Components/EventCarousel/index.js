import React from 'react';
import { View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import places from '../../../assets/data/feed';
import { useNavigation } from "@react-navigation/native";

const EventCard = ({ event, onPress }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Event Details')}>
      <ImageBackground source={event.image} style={styles.image}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{event.date}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{event.price}€</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.location}>{event.address}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const EventCarousel = () => {
  const handlePress = (eventId) => {
    console.log('Pressed event:', eventId);
  };

  const renderEventCard = ({ item }) => (
    <EventCard event={item} onPress={() => handlePress(item.id)} />
  );

  return (
    <FlatList
      data={places}
      renderItem={renderEventCard}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: 'hidden',
    margin: 10,
    width: 300,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  dateContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
    backgroundColor: 'rgba(0,0,0,0.76)',
    padding: 10,
    height: 70,
    justifyContent: 'center',
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
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignSelf: 'flex-start',
    marginTop: 25,
    padding: 5,
    borderRadius: 10,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 250,
  },
  priceText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default EventCarousel;
