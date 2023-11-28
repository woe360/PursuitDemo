import React, {useState} from 'react';
import {
  Pressable,
  ImageBackground,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

import searchResults from '../SearchResults';
import Entypo from 'react-native-vector-icons/Entypo';

import search from '../../../assets/data/search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import SuggestionRow from "./SuggestionRow";
import UserLocation from "../MapView/UserLocation";

const EventSearch = props => {

  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}
          style={styles.background}
    >

      <View style={styles.container}
            style={styles.background}>

        <ImageBackground
          source={require('../../../assets/images/Loading.png')}
          style={styles.background}>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={25} color="#fff" />
          </TouchableOpacity>

      <GooglePlacesAutocomplete
      placeholder='Search activities'
      placeholderTextColor={'rgba(255,255,255,0.9)'}
      onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      console.log(data, details);
      navigation.navigate('Search Results')
    }}
      styles={{
        textInput: styles.textInput
      }}
      query={{
        key: 'AIzaSyD7JZYuwoh-ju8MaNsQ-pLGElYlezCCk3Y',
        language: 'en',
      }}
      suppressDefaultStyles
      renderRow={(item) => <SuggestionRow item={item} /> }
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
        </ImageBackground>
      </View>


  {/*<ImageBackground*/}
  {/*      source={require('../../../assets/images/Loading.png')}*/}
  {/*      style={styles.background}>*/}
  {/*      <View style={styles.SearchButton}>*/}
  {/*        <TouchableOpacity*/}
  {/*          style={styles.backButton}*/}
  {/*          onPress={() => navigation.goBack()}>*/}
  {/*          <Ionicons name="chevron-back" size={25} color="#fff" />*/}
  {/*        </TouchableOpacity>*/}

  {/*        <TextInput*/}
  {/*          style={styles.textInput}*/}
  {/*          placeholder="Search Event"*/}
  {/*          placeholderTextColor={'rgba(255,255,255,0.7)'}*/}
  {/*          value={inputText}*/}
  {/*          onChangeText={setInputText}*/}
  {/*        />*/}

  {/*        <Pressable*/}
  {/*          style={styles.filterButton}*/}
  {/*          onPress={() => navigation.navigate('Filter')}>*/}
  {/*          /!*onPress={() => navigation.navigate('Filter')}>*!/*/}
  {/*          <Ionicons*/}
  {/*            name="options-outline"*/}
  {/*            size={25}*/}
  {/*            color="#fff"*/}
  {/*            style={styles.icon}*/}
  {/*          />*/}
  {/*        </Pressable>*/}
  {/*      </View>*/}


        {/*<FlatList*/}
        {/*  data={search}*/}
        {/*  renderItem={({item}) => (*/}
        {/*    <Pressable onPress={() => navigation.navigate('Search Results')} style={styles.row}>*/}
        {/*      <View style={styles.iconContainer}>*/}
        {/*        <Entypo name={'location-pin'} size={35} color={'#fff'} />*/}
        {/*      </View>*/}
        {/*      <Text style={styles.eventText}>{item.description}</Text>*/}
        {/*    </Pressable>*/}
        {/*  )}*/}
        {/*/>*/}
      {/*</ImageBackground>*/}
    </View>
  );
};
export default EventSearch;
