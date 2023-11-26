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
            {/*onPress={() => navigation.navigate('EventSearch')}>*/}
          <Image source={searchIcon} style={styles.iconLeft} />
          <Text style={styles.searchButtonText}>Search activities</Text>
          {/*<Image source={filterIcon} style={styles.iconRight} />*/}

        </Pressable>
        <Pressable
          style={styles.filterButton}
          onPress={() => console.warn('Filter Search')}>
          {/*onPress={() => navigation.navigate('Filter')}>*/}
          <Image source={filterIcon} style={styles.iconRight} />
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
