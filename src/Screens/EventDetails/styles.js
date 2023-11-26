// import {Dimensions, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black', // Assuming a black background
//   },
//   headerImage: {
//     width: '100%',
//     height: 100, // Set the height according to your layout
//   },
//   backAndShareContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     // Any additional styling
//   },
//   headerTitle: {
//     color: '#000',
//     // Add other styling for the title
//   },
//   eventTitle: {
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 24,
//     padding: 10,
//     // Any additional styling
//   },
//   detailsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     // Any additional styling
//   },
//   eventDate: {
//     color: '#000',
//     // Add other styling for the date
//   },
//   eventLocation: {
//     color: '#000',
//     // Add other styling for the location
//   },
//   eventOrganizer: {
//     color: '#000',
//     // Add other styling for the organizer
//   },
//   eventPrice: {
//     color: 'green',
//     marginTop: 50,
//     // Add other styling for the price
//   },
//   eventDescription: {
//     color: 'black',
//     padding: 5,
//     // Add other styling for the description
//   },
//   eventTime: {
//
//   },
//   // ... More styles for other elements
// });
//
// export default styles;

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  eventButton: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 3 },
    elevation: 6,
    height: 210,
    width: '85%',
    alignItems: 'center',
    marginLeft: 30,
    alignContent: 'center',
  },
  eventImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: -10,
  },
  eventDetails: {
    justifyContent: 'center',
  },
  eventDate: {
    fontSize: 12,
    color: '#21ad27',
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    width: '70%',
    marginTop: 7,
  },
  eventLocation: {
    fontSize: 12,
    color: '#9d9d9d',
  },
  eventPrice: {
    marginTop: 6,
    color: '#fff',
    fontWeight: 'bold',
  },
});

