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

const HomeScreen = () => {

  return (
    <View style={styles.background}>

      <ImageBackground
        source={require('../../../assets/images/Homepage.png')} // Use require to load the image
        style={styles.background}
      >
      <ScrollView style={styles.scrollView}>
        <Pressable
          style={styles.searchButton}
          onPress={() => console.warn('Event Search')}>
          {/*  onPress={() => navigation.navigate('Destination Search')}>*/}
          {/*<Fontisto name="search" size={25} color={'red'} />*/}
          {/*<FontAwesome name="search" size={20} color="#000" />*/}
          <Text style={styles.searchButtonText}>Search activities</Text>
          {/*<FontAwesome name="filter" size={20} color="#000" />*/}
        </Pressable>

        <MiniFilters />

        <Text style={styles.title}>Upcomning events</Text>

        <EventCarousel />

        <Text style={styles.titleSecond}>Pick category</Text>

        <Categories />

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore events btn clicked')}>
          <Text style={styles.buttonText}>Explore events</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
    </View>
  );
};

export default HomeScreen;
