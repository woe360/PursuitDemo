// import React from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
//
// const EventDetailPage = ({ route }) => {
//   const { event } = route.params;
//
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Image source={event.image} style={styles.eventImage} />
//         <Text style={styles.title}>{event.title}</Text>
//         <Text style={styles.description}>{event.description}</Text>
//         <Text style={styles.date}>{event.date}</Text>
//         <Text style={styles.price}>{event.price}€</Text>
//         <Text style={styles.location}>{event.address}</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
//
// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     alignItems: 'center',
//     padding: 16,
//   },
//   eventImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 16,
//   },
//   description: {
//     fontSize: 16,
//     color: 'grey',
//     marginTop: 8,
//   },
//   date: {
//     fontSize: 16,
//     marginTop: 8,
//   },
//   price: {
//     fontSize: 16,
//     marginTop: 8,
//   },
//   location: {
//     fontSize: 16,
//     marginTop: 8,
//   },
// });
//
// export default EventDetailPage;

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const EventDetailPage = ({ route }) => {
  const event = route.params?.event;

  if (!event) {
    // If event is not provided, return an error message or a fallback component
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.errorText}>Event details are not available.</Text>
        </View>
      </SafeAreaView>
    );
  }

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
  errorText: {
    fontSize: 18,
    color: 'red',
    marginTop: 16,
  },
});

export default EventDetailPage;
