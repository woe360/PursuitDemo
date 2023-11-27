import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    width: '80%',
    marginLeft: 25,
    marginTop: 30,
    marginBottom: 10,
  },
  titleSecond: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    width: '80%',
    marginLeft: 25,
    marginTop: 30,
    marginBottom: 20,
  },
  background: {
    flex: '1',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#40DA46',
    width: 280,
    height: 55,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 55,
    marginBottom: 120,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
});

export default styles;

