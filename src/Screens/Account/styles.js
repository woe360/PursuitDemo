import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    flex: 1,
    alignItems: 'center', // Align children horizontally at the center
  },
  titleContainer: {
    marginTop: 60, // Adjust this to position the container from the top
    alignItems: 'center', // Align children at the center horizontally
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileContainer: {
    alignItems: 'center', // Align children at the center horizontally
    marginTop: 30, // Space between title and profile image
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginTop: 10, // Space between image and name
  },
  profilePursuits: {
    fontSize: 15,
    color: '#fff',
    marginTop: 5, // Space between name and pursuits
  },
  button: {
    width: 120,
    height: 45,
    borderRadius: 10,
    top: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  },
  scrollView: {
    width: '100%',
  },
  container: {
    flex: 1,
  },
  icon: {
    padding: 10,
    alignItems: 'center',
  },
});

export default styles;
