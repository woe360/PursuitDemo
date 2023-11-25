import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Text, Image,
} from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import CustomMarker from "../../Components/CustomMarker";

import places from '../../../assets/data/feed';
import EventCarouselMap from "../../Components/EventCarouselMap";
const SearchResultsMap = (props) => {

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 54.687157,
          longitude: 25.279652,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
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
      <EventCarouselMap />
      </View>
    </View>
  );
};

export default SearchResultsMap;
