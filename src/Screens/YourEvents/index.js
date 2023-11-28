import React, {useState} from 'react';
import {
  SafeAreaView,
  Pressable,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';

import styles from './styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ToggleButtons from "../../Components/ToggleButtons";
import { Header } from "react-native/Libraries/NewAppScreen";
import HeaderWithIcons from "../../Components/HeaderWithIcons";
import Pursuits from "../../Components/Pursuits";
import PastPursuits from "../../Components/PastPursuits";
import { useNavigation } from "@react-navigation/native";

const YourEvents = () => {
  const [selectedPage, setSelectedPage] = useState('upcoming');

  const handleToggle = (selection) => {
    setSelectedPage(selection);
  };

  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../../assets/images/YourEvents.png')}
      style={styles.background}>
    <View>
      <ScrollView style={styles.scrollView}>

        <Text style={styles.title}>Pursuits</Text>

        <ToggleButtons onToggle={handleToggle} />
        {selectedPage === 'upcoming' ? <Pursuits /> : <PastPursuits />}


        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Event Search')}>
          <Text style={styles.buttonText}>Explore events</Text>
        </Pressable>
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

export default YourEvents;

