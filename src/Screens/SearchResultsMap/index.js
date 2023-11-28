import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  PermissionsAndroid,
  Platform,
} from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import CustomMarker from "../../Components/CustomMarker";

import Geolocation from '@react-native-community/geolocation';


import places from '../../../assets/data/feed';
import EventCarouselMap from "../../Components/EventCarouselMap";
const SearchResultsMap = (props) => {

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const [userLocation, setUserLocation] = useState(null);


  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ).then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          locateCurrentPosition();
        }
      });
    } else {
      locateCurrentPosition();
    }
  }, []);


  const locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setUserLocation({
          latitude,
          longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        });
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };



  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}

        initialRegion={userLocation || {
        // initialRegion={{
          latitude: 54.687157,
          longitude: 25.279652,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {places.map(place => (
          <CustomMarker
            coordinate={place.coordinates}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />)
        )}
      </MapView>
      <View style={{position: 'absolute', bottom: 80}}>
        <EventCarouselMap/>
      </View>
    </View>
  );
};

export default SearchResultsMap;
