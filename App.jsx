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
import DestinationSearch from "./src/Screens/DestinationSearch";
import YourEvents from "./src/Screens/YourEvents";
import Pursuits from "./src/Components/Pursuits";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      {/*<Homepage />*/}
      <MapView />
      {/*<SearchResults />*/}
      {/*<DestinationSearch /> //pabaigti*/}
      {/*<YourEvents /> // padaryti jog paspaudus toggle mygtukus persijungtu ekranas*/}

    </View>
  );
};

export default App;
