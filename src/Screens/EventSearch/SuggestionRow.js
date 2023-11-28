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

const SuggestionRow = ({item}) => (
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Entypo name={'location-pin'} size={35} color={'#fff'} />
              </View>
              <Text style={styles.eventText}>{item.description}</Text>
            </View>
  );
export default SuggestionRow;
