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
  Image, TouchableOpacity,
} from "react-native";

import styles from './styles';

import MiniFilters from '../../Components/MiniFilters';
import Categories from '../../Components/Categories';
import EventCarousel from '../../Components/EventCarousel';

import searchIcon from '../../../assets/images/search.png';
import filterIcon from '../../../assets/images/filter.png';

import {useNavigation} from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import FilterMiniFilters from "../../Components/FilterMiniFilters";
import Price from "../../Components/Price";
import Date from "../../Components/Date";

const HomeScreen = (props) => {
  const navigation = useNavigation();


  return (
    <View style={styles.background}>
      <ImageBackground
        source={require('../../../assets/images/Loading.png')} // Use require to load the image
        style={styles.background}
      >
        <ScrollView style={styles.scrollView}>

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={25} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.titleMain}>Filter</Text>

          <Text style={styles.title}>Category</Text>


          <FilterMiniFilters/>

          <Text style={styles.titleSecond}>Date</Text>


          <Date />

          <Text style={styles.titleSecond}>Price</Text>


          <Price/>

          <View style={styles.buttonRow}>
          <Pressable
            style={styles.buttonReset}
            onPress={() => navigation.navigate('Event Search')}>
            <Text style={styles.buttonTextReset}>RESET</Text>
          </Pressable>
          <Pressable
            style={styles.buttonApply}
            onPress={() => navigation.navigate('Event Search')}>
            <Text style={styles.buttonText}>APPLY</Text>
          </Pressable>
            </View>


        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;

