import React from 'react';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet, } from 'react-native';

const eventData = [
{
    image: 'https://picsum.photos/200/300',
    title: 'International Band Music Concert',
    location: '36 Guild Street London, UK',
    date: '10 JUNE',
    time: '4:00PM - 9:00PM',
    price: '25€',
  },
];

const Results = ({ onPress, eventData }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <ImageBackground source={{ uri: eventData.image }} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{eventData.title}</Text>

          <View style={styles.detailsContainer}>
            <View style={styles.dateBadge}>
              <Text style={styles.dateText}>{eventData.date}</Text>
            </View>
            <Text style={styles.location}>{eventData.location}</Text>
            <Text style={styles.time}>{eventData.time}</Text>
            <Text style={styles.price}>{eventData.price}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    width: 300,
    height: 150,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  dateBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  dateText: {
    fontWeight: 'bold',
    color: '#E64C3C',
  },
  location: {
    color: 'white',
    fontSize: 14,
  },
  time: {
    color: 'white',
    fontSize: 14,
  },
  price: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  // ... any additional styles you might need
});

export default Results;
