import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    width: '80%',
    marginLeft: 25,
    marginTop: 60,
    paddingLeft: 120,
    marginBottom: 10,
    alignItems: 'center',

  },
  background: {
    backgroundColor: '#121214',
  },
  button: {
    backgroundColor: '#40DA46',
    width: 280,
    height: 55,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonUpcomming: {
    fontSize: 11,
    backgroundColor: 'rgba(151,151,151,0.23)',
    width: 120,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 70,
    marginTop: 20,
    flexDirection: 'row',
  },
  buttonTextUpcomming: {
    fontWeight: 'normal',
    color: '#40DA46',
  },
  buttonPast: {
      fontSize: 11,
      backgroundColor: 'rgba(151,151,151,0.23)',
      width: 120,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginLeft: 200,
      marginBottom: 20,

    },
});

export default styles;
