import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  categories: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryButtons: {
    backgroundColor: '#b02828',
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 25,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
  },
  categoryButton: {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#be2fd3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  seeAll: {
    marginTop: 10,
    textAlign: 'right',
    color: '#841584',
  },
  button: {
    backgroundColor: '#40DA46',
    width: 200,
    height: 55,
    borderRadius: 10,
    marginTop: 555,
    marginLeft: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default styles;
