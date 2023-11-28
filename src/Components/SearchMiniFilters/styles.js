import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  carouselContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 45,
    backgroundColor: '#000000',
    // backgroundColor: '#40DA46',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  label: {
    color: '#FFF',
    marginTop: 1,
    fontSize: 15,
  },
});

export default styles;
