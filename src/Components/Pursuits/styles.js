import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  eventButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 3 },
    elevation: 6,
    width: '85%',
    alignItems: 'center',
    marginLeft: 30,
  },
  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  eventDetails: {
    justifyContent: 'center',
  },
  eventDate: {
    fontSize: 12,
    color: '#21ad27',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    width: '70%',
  },
  eventLocation: {
    fontSize: 12,
    color: '#666',
  },
  eventPrice: {
    marginTop: 6,
  },
});
