import React from 'react';
import {
  View,
  SafeAreaView,
  Text, Image,
} from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import places from '../../../assets/data/feed';

const CustomMarker = (props) => {
  const {coordinate, onPress, isSelected} = props;

  const imageSource = isSelected
    ? require('../../../assets/images/pursuit_selected.png')
    : require('../../../assets/images/pursuit.png');

  return (
        <Marker coordinate={coordinate} onPress={onPress}>
          <View style={{
            backgroundColor: isSelected ? '#ffffff' : '#000000',
            padding: 5,
            borderRadius: 25,
            borderColor: '#000000',
            borderWidth: 1,
            justifyContent: 'center',
          }}>

            <Image
              source={imageSource}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
        </Marker>
  );
};

export default CustomMarker;
