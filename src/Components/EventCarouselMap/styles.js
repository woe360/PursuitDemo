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
    height: 110,
    width: '85%',
    alignItems: 'center',
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
