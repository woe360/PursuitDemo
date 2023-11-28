import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DistanceRangeSlider = () => {
  const [values, setValues] = useState([5, 45]);

  const CustomMarker = () => (
    <View style={styles.thumb}>
      {/* You can use an <Image /> or <View /> with custom styling */}
    </View>
  );

  const CustomTrack = () => (
    <View style={styles.track}>
      {/* Custom track styling */}
    </View>
  );

  return (
    <View style={styles.container}>
      <MultiSlider
        values={[values[0], values[1]]}
        sliderLength={280} // Set the length of the slider
        onValuesChange={vals => setValues(vals)}
        min={0}
        max={300}
        step={1}
        allowOverlap={false} // Prevent the sliders from crossing over each other
        snapped={true} // Values are snapped to the step
        minMarkerOverlapDistance={10}

        customMarker={CustomMarker}
        selectedStyle={styles.selectedTrack}
        unselectedStyle={styles.unselectedTrack}
        containerStyle={styles.sliderContainer}
        trackStyle={styles.customTrack}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`${values[0]}KM - ${values[1]}KM`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
  },
  textContainer: {
    marginTop: 20,
  },
  text: {
    color: '#FFFFFF',
  },
  thumb: {
    height: 30,
    width: 15,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    borderWidth: 1,
  },
  selectedTrack: {
    height: 5,
    backgroundColor: '#40DA46',
  },
  unselectedTrack: {
    height: 5,
    backgroundColor: '#CCCCCC',
  },
  sliderContainer: {
    height: 30,
  },
  customTrack: {
    borderRadius: 3,
  },
  customMarker: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default DistanceRangeSlider;
