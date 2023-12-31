import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Homepage from '../../Screens/Homepage';
import MapView from "../../Screens/MapView";
import YourEvents from "../../Screens/YourEvents";
import Account from "../../Screens/Account";
import DestinationSearch from "../../Screens/DestinationSearch";
import Fontisto from "react-native-vector-icons/Fontisto";
import EventSearch from "../../Screens/EventSearch";


const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#000000',
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Homepage}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
                left: 10,
              }}>
              <Image
                source={require('../../../assets/images/explore.png')}
                resizeMode={'contain'}
                style={{
                  width: 25,
                  height: 25,
                  marginBottom: 5,
                  tintColor: focused ? '#fff' : '#fff',
                }}
              />
            <Text style={{color: focused ? '#40DA46' : '#fff', fontSize: 13, }}>Explore</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Maps"
        component={MapView}
        options={{
          tabBarIcon: ({focused}) => (
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 10,
            left: 5,
          }}>
            <Image
              source={require('../../../assets/images/map.png')}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
                marginBottom: 5,
                tintColor: focused ? '#fff' : '#fff',
              }}
            />
            <Text style={{color: focused ? '#40DA46' : '#fff', fontSize: 13, }}>Maps</Text>
          </View>
        ),
      }}/>
      <Tab.Screen
        name="Pursuits"
        component={YourEvents}
        options={{
          tabBarIcon: ({focused}) => (
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 10,
            right: 5,
          }}>
            <Image
              source={require('../../../assets/images/pursuit.png')}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
                marginBottom: 5,
                tintColor: focused ? '#fff' : '#fff',
              }}
            />
            <Text style={{color: focused ? '#40DA46' : '#fff', fontSize: 13, }}>Pursuits</Text>
          </View>
        ),
      }}/>
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 10,
            right: 10,
          }}>
            <Image
              source={require('../../../assets/images/account.png')}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
                marginBottom: 5,
                  tintColor: focused ? '#fff' : '#fff',
              }}
            />
            <Text style={{color: focused ? '#40DA46' : '#fff', fontSize: 13, }}>Account</Text>
          </View>
        ),
      }}/>
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({

})

export default Tabs;
