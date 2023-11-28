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
  Image,
} from 'react-native';

import styles from './styles';

import MiniFilters from '../../Components/MiniFilters';
import Categories from '../../Components/Categories';
import EventCarousel from '../../Components/EventCarousel';

import searchIcon from '../../../assets/images/search.png';
import filterIcon from '../../../assets/images/filter.png';

import {useNavigation} from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <ImageBackground
        source={require('../../../assets/images/Homepage.png')} // Use require to load the image
        style={styles.background}
      >
      <ScrollView style={styles.scrollView}>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Event Search')}>
          <Ionicons name="search" size={25} color="#000" style={styles.iconLeft} />
          <Text style={styles.searchButtonText}>Search activities</Text>

        </Pressable>
        <Pressable
          style={styles.filterButton}
          onPress={() => navigation.navigate('Filter')}>
          {/*onPress={() => navigation.navigate('Filter')}>*/}
          <Ionicons name="options-outline" size={25} color="#000" style={styles.iconRight} />
        </Pressable>

        <MiniFilters />

        <Text style={styles.title}>Upcomning events</Text>

        <EventCarousel />

        <Text style={styles.titleSecond}>Pick category</Text>

        <Categories />

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Event Search')}>
          <Text style={styles.buttonText}>Explore events</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
    </View>
  );
};
export default HomeScreen;
