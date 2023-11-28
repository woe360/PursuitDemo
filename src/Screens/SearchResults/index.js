import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  ImageBackground,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image, TouchableOpacity, TextInput,
} from "react-native";

import styles from './styles';

import MiniFilters from '../../Components/MiniFilters';
import Categories from '../../Components/Categories';
import EventCarousel from '../../Components/EventCarousel';
import Pursuits from "../../Components/Pursuits";

import searchIcon from '../../../assets/images/search.png';
import filterIcon from '../../../assets/images/filter.png';
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchMiniFilters from "../../Components/SearchMiniFilters";

const SearchResults = () => {

  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (

    <View style={styles.background}>
      <ImageBackground
        source={require('../../../assets/images/YourEvents.png')}
        style={styles.background}
      >
        <ScrollView style={styles.scrollView}>
          {/*<Pressable*/}
          {/*  style={styles.searchButton}*/}
          {/*  onPress={() => navigation.navigate('Event Search')}>*/}
          {/*  /!*onPress={() => navigation.navigate('EventSearch')}>*!/*/}
          {/*  <Image source={searchIcon} style={styles.iconLeft} />*/}
          {/*  <Text style={styles.searchButtonText}>Search activities</Text>*/}
          {/*  /!*<Image source={filterIcon} style={styles.iconRight} />*!/*/}

          {/*</Pressable>*/}
          {/*<Pressable*/}
          {/*  style={styles.filterButton}*/}
          {/*  onPress={() => console.warn('Filter Search')}>*/}
          {/*  /!*onPress={() => navigation.navigate('Filter')}>*!/*/}
          {/*  <Image source={filterIcon} style={styles.iconRight} />*/}
          {/*</Pressable>*/}

          <View style={styles.SearchButton}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={25} color="#fff" />
            </TouchableOpacity>

            <TextInput
              style={styles.textInput}
              placeholder="Search Event"
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              value={inputText}
              onChangeText={setInputText}
            />
            <Pressable
              style={styles.filterButton}
              onPress={() => navigation.navigate('Filter')}>
              {/*onPress={() => navigation.navigate('Filter')}>*/}
              <Ionicons
                name="options-outline"
                size={25}
                color="#fff"
                style={styles.icon}
              />
            </Pressable>
          </View>

          <SearchMiniFilters />

          <Text style={styles.title}>Events</Text>

          <Pursuits />

        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default SearchResults;
