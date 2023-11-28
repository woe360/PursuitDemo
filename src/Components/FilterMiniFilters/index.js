import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const {width: viewportWidth} = Dimensions.get('window');

const data = [
  {label: 'Sports', iconName: ''},
  {label: 'Music', iconName: ''},
  {label: 'Food', iconName: ''},
  {label: 'Art', iconName: ''},
  // Add more items as needed
];

const MiniFilters = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItemSelection = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={[
        styles.item,
        styles.categoryButton,
        { backgroundColor: selectedItems.includes(index) ? '#000' : '#40DA46' }
      ]}
      onPress={() => toggleItemSelection(index)}
    >
      <Icon name={item.iconName} size={20} color="#FFF" />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={110}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        containerCustomStyle={styles.carouselContainer}
        activeSlideAlignment={'center'}
        loop={true}
      />
    </SafeAreaView>
  );
};

export default MiniFilters;
