import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from './styles';

const events = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/200',
    date: 'Wed, Apr 28 - 5:30 PM',
    title: 'Jo Malone London’s Mother’s Day Presents',
    location: 'Radius Gallery • Santa Cruz, CA',
    price: '13€',
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/200',
    date: 'Sat, May 1 - 2:00 PM',
    title: 'A Virtual Evening of Smooth Jazz',
    location: 'Lot 13 • Oakland, CA',
    price: '13€',
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/200',
    date: 'Sat, Apr 24 - 1:30 PM',
    title: "Women's Leadership Conference 2021",
    location: '53 Bush St • San Francisco, CA',
    price: '13€',
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/200',
    date: 'Fri, Apr 23 - 6:00 PM',
    title: 'International Kids Safe Parents Night Out',
    location: 'Lot 13 • Oakland, CA',
    price: '13€',
  },
];

const EventButton = ({ event }) => {
  return (
    <TouchableOpacity onPress={() => onPress(event)} style={styles.eventButton}>
      <Image source={{ uri: event.imageUrl }} style={styles.eventImage} />
      <View style={styles.eventDetails}>
        <Text style={styles.eventDate}>{event.date}</Text>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.eventLocation}>{event.location}</Text>
        <Text style={styles.eventPrice}>{event.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const PastPursuits = () => {
  return (
    <FlatList
      data={events}
      renderItem={({ item }) => <EventButton event={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default PastPursuits;
