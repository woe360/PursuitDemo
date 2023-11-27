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
import Pursuits from "../../Components/Pursuits";

import searchIcon from '../../../assets/images/search.png';
import filterIcon from '../../../assets/images/filter.png';
import { useNavigation } from "@react-navigation/native";

const SearchResults = () => {

  const navigation = useNavigation();

  return (

    <View style={styles.background}>
      <ImageBackground
        source={require('../../../assets/images/YourEvents.png')}
        style={styles.background}
      >
        <ScrollView style={styles.scrollView}>
          <Pressable
            style={styles.searchButton}
            onPress={() => navigation.navigate('Event Search')}>
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

          <Text style={styles.title}>Events</Text>

          <Pursuits />

        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default SearchResults;
