import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventSearch from '../../Screens/EventSearch';
import SearchResults from '../../Screens/SearchResults';

import Tabs from "./Tabs";
import MyProfile from "../../Screens/MyProfile";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator>

        <Stack.Screen
          name='Explore'
          component={Tabs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Event Search'
          component={EventSearch}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'Search Results'}
          component={SearchResults}
          options={{headerShown: true}}
        />




        <Stack.Screen
          name='Account'
          component={Tabs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='My profile'
          component={MyProfile}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
