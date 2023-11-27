// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Pressable,
//   ImageBackground,
//   Text,
//   View,
//   ScrollView,
//   Dimensions,
//   Image, FlatList,
// } from "react-native";
//
// import styles from './styles';
//
// import MiniFilters from '../../Components/MiniFilters';
// import Categories from '../../Components/Categories';
// import EventCarousel from '../../Components/EventCarousel';
//
// import searchIcon from '../../../assets/images/search.png';
// import filterIcon from '../../../assets/images/filter.png';
// import places from "../../../assets/data/feed";
//
//
// const EventDetails = (event) => {
//   return (
//     <View style={styles.background}>
//       <ImageBackground
//         source={require('../../../assets/images/Homepage.png')} // Use require to load the image
//         style={styles.background}
//       >
//         <ScrollView style={styles.scrollView}>
//
//
//           <Image source={event.image} style={styles.eventImage} />
//           <View style={styles.eventDetails}>
//             <Text style={styles.eventTitle}>{event.title}</Text>
//             <Text style={styles.eventDate}>{`${event.date}`}</Text>
//             <Text style={styles.eventDate}>{`${event.time}`}</Text>
//             <Text style={styles.eventLocation}>{event.address}</Text>
//             <Text style={styles.eventPrice}>{`${event.price}€`}</Text>
//           </View>
//
//
//           <Text style={styles.title}>Event details</Text>
//
//           <EventCarousel />
//           <Text style={styles.price}>12</Text>
//
//           <Text style={styles.titleSecond}>About event</Text>
//
//           <Text style={styles.about}>1asifn asif nasi </Text>
//
//           <Pressable
//             style={styles.button}
//             onPress={() => console.warn('Explore events btn clicked')}>
//             <Text style={styles.buttonText}>Buy</Text>
//           </Pressable>
//         </ScrollView>
//       </ImageBackground>
//     </View>
//   );
// };
//
//
// const EventDetailssa = () => {
//   return (
//     <FlatList
//       data={places}
//       renderItem={({ item }) => <EventButton event={item} />}
//       keyExtractor={(item) => item.id.toString()}
//     />
//   );
// };
//
// export default EventDetails;

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const EventDetailPage = ({ route }) => {
  const { event } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={event.image} style={styles.eventImage} />
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.price}>{event.price}€</Text>
        <Text style={styles.location}>{event.address}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    padding: 16,
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    color: 'grey',
    marginTop: 8,
  },
  date: {
    fontSize: 16,
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    marginTop: 8,
  },
  location: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default EventDetailPage;
