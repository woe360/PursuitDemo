// import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';


import Homepage from './src/Screens/Homepage';

import Tabs from './src/Components/Navigation/Tabs';
import {NavigationContainer} from '@react-navigation/native';

import Categories from "./src/Components/Categories";
import YourEvents from "./src/Screens/YourEvents";
import DestinationSearch from "./src/Screens/DestinationSearch";

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>

    // <View>
    //   <StatusBar barStyle="light-content" />
    //   {/*<Homepage />*/}
    //   {/*<Tabs />*/}
    //   {/*<Categories />*/}
    //   {/*<YourEvents />*/}
    //   {/*<DestinationSearch/>*/}
    // </View>
  );
};

export default App;
