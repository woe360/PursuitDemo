import React, {useState} from 'react';
import {
  Pressable,
  ImageBackground,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
} from "react-native";

import styles from './styles';

import searchIcon from '../../../assets/images/search.png';
import backIcon from '../../../assets/images/whiteIcon.png';
import searchResults from "../SearchResults";
import Entypo from "react-native-vector-icons/Entypo";

import search from "../../../assets/data/search"
const EventSearch = (props) => {

  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}
          style={styles.background}>
      <ImageBackground
        source={require('../../../assets/images/Homepage.png')}
        style={styles.background}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Search Event"
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          value={inputText}
          onChangeText={setInputText}
          />

        <FlatList
          data={search}
          renderItem={({item}) => (
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Entypo name={"location-pin"} size={35} color={'#fff'}/>
              </View>
              <Text style={styles.eventText}>{item.description}</Text>
            </View>
          )}
        />

      </ImageBackground>
    </View>
  );
};
export default EventSearch;
