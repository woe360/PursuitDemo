import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import places from '../../../assets/data/feed';

const EventButton = ({ event }) => {
  return (
    <TouchableOpacity onPress={() => onPress(event)} style={styles.eventButton}>
      <Image source={event.image} style={styles.eventImage} />
      <View style={styles.eventDetails}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.eventDate}>{`${event.date}`}</Text>
        <Text style={styles.eventDate}>{`${event.time}`}</Text>
        <Text style={styles.eventLocation}>{event.address}</Text>
        <Text style={styles.eventPrice}>{`${event.price}€`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const EventDetails = () => {
  return (
    <FlatList
      data={places}
      renderItem={({ item }) => <EventButton event={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default EventDetails;
