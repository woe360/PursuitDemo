import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  ImageBackground,
  Text,
  View,
  ScrollView,
  Dimensions, Image,
} from "react-native";

import styles from './styles';

import MiniFilters from '../../Components/MiniFilters';
import SearchResultsMap from '../SearchResultsMap';

import searchIcon from "../../../assets/images/search.png";
import filterIcon from "../../../assets/images/filter.png";

const MapView = () => {

  return (
    <View style={styles.background}>
      <View style={styles.scrollView}>

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

        {/*<MiniFilters />*/}

        <SearchResultsMap />

      </View>
    </View>
  );
};

export default MapView;
