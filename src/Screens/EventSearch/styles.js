import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: '1',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textInput: {
    fontSize: 19,
    marginBottom: 20,
    marginTop: 70,
    color: '#fff',
    backgroundColor: 'rgba(157,157,157,0.22)',
    padding: 7,
    height: 60,
    width: '70%',
    marginLeft: 60,
    borderRadius: 10,
    fontWeight: '500',
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
    width: '90%',
    marginLeft: 20,
  },
  iconContainer: {
    backgroundColor: 'rgba(0,0,0,0.38)',
    padding: 6,
    borderRadius: 8,
  },
  eventText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 14,
  },
  backButton: {
    position: 'absolute',
    top: 87,
    left: 20,
    zIndex: 10,
  },
  SearchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 20,
    top: 20,
    marginLeft: 10,
  },
  SearchButtonGoogle: {
    top: 50,
  },
  filterButton: {
    position: 'absolute',
    right: 0,
    top: 67,
    zIndex: 101,
  },
});

export default styles;
