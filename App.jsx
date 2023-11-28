import 'react-native-gesture-handler';
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
import SearchResults from "./src/Screens/SearchResults";
import EventDetails from "./src/Screens/EventDetails";
import SignIn from "./src/Screens/SignIn";
import SignUp1 from "./src/Screens/SignUp";
import EventSearch from "./src/Screens/EventSearch";
// import Filter from "./src/Screens/Filter";

import Router from './src/Components/Navigation/Router';

const App = () => {
  return (
    //
    // <NavigationContainer>
    //   <StatusBar barStyle="light-content" />
    //   <Tabs />
    // </NavigationContainer>


    <Router />

    // <View>
    //   <StatusBar barStyle="light-content" />
    //   {/*<Homepage />*/}
    //   {/*<YourEvents />*/}
    //   {/*<DestinationSearch/>*/}
    //   {/*<SearchResults/>*/}
    //   {/*<EventDetails/>*/}
    //   {/*<SignIn />*/}
    //   {/*<SignUp1/>*/}
    //   {/*<EventSearch/>*/}
    //   {/*<Filter />*/}
    // </View>
  );
};

export default App;
