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
    backgroundColor: 'transparent',
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
  searchButton: {
    backgroundColor: '#9d9d9d',
    opacity: 0.4,
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 60,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000000',
    marginRight: 95,
    marginLeft: 35,
  },
  iconLeft: {
    width: 25,
    height: 25,
    marginRight: 30,
  },
  iconRight: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  filterButton: {
    position: 'absolute',
    right: 20,
    top: 80,
    zIndex: 101,
  },
});

export default styles;
