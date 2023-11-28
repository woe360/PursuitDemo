import React, { useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity, Pressable,
} from "react-native";

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Rube from '../../../assets/images/Rube.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyProfile = (props) => {

  const navigation = useNavigation();

  const [name, setName] = useState('Domas Šestakovas');
  const [email, setEmail] = useState('domas@email.com');
  const [phone, setPhone] = useState('+37062388932');
  const [password, setPassword] = useState('**********');

  return (
    <View style={styles.background}>
      <ImageBackground
        source={require('../../../assets/images/SignIn.png')}
        style={styles.background}
      >
        <ScrollView style={styles.scrollView}>

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={25} color="#fff" />
          </TouchableOpacity>

          <View style={styles.titleContainerMain}>
            <Text style={styles.title}>My profile</Text>
          </View>

          <View style={styles.profileContainer}>
            <Image source={Rube} style={styles.profile} />
            <Ionicons name="pencil-outline" size={25} color="#fff" style={styles.icon} />
            <Text style={styles.profileName}>Domas Šestakovas</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleSecond}>Edit details</Text>
          </View>

          <View style={styles.inputContainer}>
          {/*<View style={styles.inputContainerSecond}>*/}
            <Text style={styles.inputLabel}></Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
            />
            <Ionicons name="pencil-outline" size={25} color="#fff" style={styles.icon} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}></Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
            />
            <Ionicons name="pencil-outline" size={25} color="#fff" style={styles.icon} />
          </View>

            <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}></Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter your phone number"
            />
            <Ionicons name="pencil-outline" size={25} color="#fff" style={styles.icon} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.titleSecond}>Change password</Text>
            </View>

            <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}></Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              hidde
              placeholder="Change your password"
            />
            <Ionicons name="pencil-outline" size={25} color="#fff" style={styles.icon} />
            </View>

        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MyProfile;
