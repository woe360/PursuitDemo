import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  ImageBackground,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

import styles from './styles';

import MiniFilters from '../../Components/MiniFilters';
import Categories from '../../Components/Categories';
import EventCarousel from '../../Components/EventCarousel';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ToggleButtons from "../../Components/ToggleButtons";
import { Header } from "react-native/Libraries/NewAppScreen";
import HeaderWithIcons from "../../Components/HeaderWithIcons";
import Pursuits from "../../Components/Pursuits";
import PastPursuits from "../../Components/PastPursuits";

const YourEvents = () => {

  return (
    <View style={styles.background}>
      <ScrollView style={styles.scrollView}>

        <Text style={styles.title}>Pursuits</Text>

        <ToggleButtons />

        <PastPursuits />

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore events btn clicked')}>
          <Text style={styles.buttonText}>Explore events</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default YourEvents;

