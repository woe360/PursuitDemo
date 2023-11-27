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
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const MapView = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <View style={styles.scrollView}>

        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Event Search')}>
          {/*onPress={() => navigation.navigate('EventSearch')}>*/}
          <Ionicons name="search" size={25} color="#fff" style={styles.iconLeft} />
          <Text style={styles.searchButtonText}>Search activities</Text>
          {/*<Image source={filterIcon} style={styles.iconRight} />*/}

        </Pressable>
        <Pressable
          style={styles.filterButton}
          onPress={() => console.warn('Filter Search')}>
          {/*onPress={() => navigation.navigate('Filter')}>*/}
          <Ionicons name="options-outline" size={25} color="#fff" style={styles.iconRight} />
        </Pressable>



        {/*<MiniFilters />*/}

        <SearchResultsMap />

      </View>
    </View>
  );
};

export default MapView;
