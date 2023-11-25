import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  eventButton: {
    flexDirection: 'row',
    backgroundColor: '#691313',
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
    color: '#000',
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    width: '70%',
    marginTop: 7,
  },
  eventLocation: {
    fontSize: 12,
    color: '#000',
  },
  eventPrice: {
    marginTop: 6,
    color: '#000',
    fontWeight: 'bold',
  },
});
