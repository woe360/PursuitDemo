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


const MapView = () => {

  return (
    <View style={styles.background}>
      <ScrollView style={styles.scrollView}>

        <Pressable
          style={styles.searchButton}
          onPress={() => console.warn('Event Search')}>
          {/*  onPress={() => navigation.navigate('Destination Search')}>*/}
          {/*<Fontisto name="search" size={25} color={'red'} />*/}
          <Text style={styles.searchButtonText}>Search activities</Text>
        </Pressable>

        <MiniFilters />

      </ScrollView>
    </View>
  );
};

export default MapView;
