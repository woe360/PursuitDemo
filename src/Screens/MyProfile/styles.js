import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 20,
    alignItems: 'right',
  },
  titleContainerMain: {
    marginTop: 20,
    alignItems: 'center',
    top: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 70,
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
    marginTop: 10,
  },
  profilePursuits: {
    fontSize: 15,
    color: '#fff',
    marginTop: 5,
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
  inputContainer: {
    marginTop: 20,
    // paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 35,
  },
  input: {
    backgroundColor: 'rgba(157,157,157,0.28)',
    color: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 50,
  },
  titleSecond: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 40,
  },
  backButton: {
    position: 'absolute',
    top: 65,
    left: 20,
    zIndex: 10,
  },
  icon: {
    marginHorizontal: -35,
    marginBottom: 12,
  },
});

export default styles;
