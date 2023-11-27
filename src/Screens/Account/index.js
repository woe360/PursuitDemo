import React from 'react';
import {
  Pressable,
  ImageBackground,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

import styles from './styles';

import Rube from '../../../assets/images/Rube.png';

import {useNavigation} from '@react-navigation/native';
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Ionicons from "react-native-vector-icons/Ionicons";


const Account = (props) => {

  const navigation = useNavigation();

  return (
    <View style={styles.background}>

      <ImageBackground
        source={require('../../../assets/images/SignIn.png')} // Use require to load the image
        style={styles.background}
      >
        <ScrollView style={styles.scrollView}>

          <View style={styles.titleContainer}>
            {/*<FontAwesomeIcon icon={faAddressCard} />*/}
            <Text style={styles.title}>Account</Text>
          </View>

          <View style={styles.profileContainer}>
            <Image source={Rube} style={styles.profile} />
            <Text style={styles.profileName}>Domas Šestakovas</Text>
          </View>

          <Pressable style={styles.button} onPress={() => navigation.navigate('My profile')}>
            {/*<FontAwesomeIcon icon={faAddressCard} />*/}
            <Ionicons name="accessibility-outline" size={25} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>My profile</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => console.warn('Log out')}>
            <Ionicons name="log-out-outline" size={25} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Log out</Text>
          </Pressable>

        </ScrollView>

      </ImageBackground>

    </View>
  );
};
export default Account;
