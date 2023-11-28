import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PriceRangeSlider = () => {
  const [values, setValues] = useState([71, 221]);

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
        <Text style={styles.text}>{`${values[0]}€ - ${values[1]}€`}</Text>
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
    height: 30, // Your custom size
    width: 30, // Your custom size
    borderRadius: 10, // Half of width/height to make it round
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    // Your custom color
    // Add shadow or other styling to match the Figma design
  },
  selectedTrack: {
    height: 10, // Your custom track thickness
    backgroundColor: '#00FF00', // Your custom selected track color
  },
  unselectedTrack: {
    height: 10,
    backgroundColor: '#CCCCCC',
  },
  sliderContainer: {
    height: 40, // Ensure the touch area is large enough
  },
  customTrack: {
    borderRadius: 3, // Optional: if you want rounded corners
  },
  customMarker: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#000', // Choose a color that fits your app's theme
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default PriceRangeSlider;
