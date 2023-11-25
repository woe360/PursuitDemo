import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles';
import places from '../../../assets/data/feed';

const { width } = Dimensions.get('window');

const cardWidth = width * 0.8; // 80% of the screen width

const carouselStyle = {
  ...styles.eventButton,
  width: cardWidth,
  marginLeft: width * 0.1, // Adjust for proper spacing
  marginRight: width * -0.05 // Make cards closer to each other
};

const EventButton = ({ event }) => {
  return (
    <TouchableOpacity onPress={() => {/* Handle press event */}} style={carouselStyle}>
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

const EventCarouselMap = () => {
  return (
    <FlatList
      data={places} // Use the imported places data
      renderItem={({ item }) => <EventButton event={item} />}
      keyExtractor={(item) => item.id}
      horizontal={true} // Enable horizontal scrolling
      showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicators
      snapToAlignment={"start"} // Align the left edge of the first item with the left edge of the FlatList
      snapToInterval={cardWidth + (width * 0.02)} // Adjust for proper snapping with the new marginRight
      decelerationRate={"fast"} // Speed of snapping
      contentContainerStyle={{
        paddingRight: width * 0.1, // Add padding to the end of the FlatList
      }}
    />
  );
};

export default EventCarouselMap;


