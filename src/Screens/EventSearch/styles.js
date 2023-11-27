import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: '1',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  // searchButton: {
  //   backgroundColor: '#9d9d9d',
  //   opacity: 0.4,
  //   height: 60,
  //   width: Dimensions.get('screen').width - 20,
  //   borderRadius: 10,
  //   flexDirection: 'row',
  //   marginHorizontal: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   top: 60,
  //   zIndex: 100,
  // },
  // searchButtonText: {
  //   fontSize: 19,
  //   fontWeight: '600',
  //   color: '#000000',
  //   marginRight: 95,
  //   marginLeft: 35,
  // },
  // scrollView: {
  //   width: '100%',
  //   height: '100%',
  // },
  // iconLeft: {
  //   width: 25,
  //   height: 25,
  //   marginRight: 30,
  // },
  // iconRight: {
  //   width: 25,
  //   height: 25,
  //   marginRight: 10,
  // },
  // filterButton: {
  //   position: 'absolute',
  //   right: 20,
  //   top: 80,
  //   zIndex: 101,
  // },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 50,
    color: '#fff',
    backgroundColor: 'rgba(157,157,157,0.22)',
    padding: 7,
    height: 60,
    width: '90%',
    marginLeft: 20,
    borderRadius: 10,
  },
  container: {
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: 'rgba(203,203,203,0.41)',
    alignSelf: 'center',
    width: '85%',
  },
  iconContainer: {
    backgroundColor: 'rgba(0,0,0,0.38)',
    padding: 7,
    borderRadius: 8,
    marginLeft: 20,
  },
  eventText: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 15,
  },
});

export default styles;
