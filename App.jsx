import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

import React from 'react';

import Homepage from './src/Screens/Homepage';
import MapView from "./src/Screens/MapView";
import SearchResults from "./src/Screens/SearchResults";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Homepage />
      {/*<MapView />*/}
      {/*<SearchResults />*/}
    </View>
  );
};

export default App;
