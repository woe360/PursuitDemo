// import React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
//
// // Import your screen components
// import ExploreScreen from '../../Screens/Homepage'; // replace with your actual component
// import MapScreen from '../../Screens/MapView'; // replace with your actual component
// import PursuitsScreen from '../../Screens/YourEvents'; // replace with your actual component
// // import AccountScreen from '../../Screens/Homepage'; // replace with your actual component
//
// const Tab = createBottomTabNavigator();
//
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//
//             if (route.name === 'Explore') {
//               iconName = 'search';
//             } else if (route.name === 'Map') {
//               iconName = 'map-o';
//             } else if (route.name === 'Pursuits') {
//               iconName = 'heartbeat';
//             } else if (route.name === 'Account') {
//               iconName = 'user';
//             }
//
//             // You can return any component that you like here!
//             return <Icon name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}
//       >
//         <Tab.Screen name="Explore" component={ExploreScreen} />
//         <Tab.Screen name="Map" component={MapScreen} />
//         <Tab.Screen name="Pursuits" component={PursuitsScreen} />
//         <Tab.Screen name="Account" component={AccountScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// Import your screen components
import ExploreScreen from '../../Screens/Homepage'; // replace with your actual component
import MapScreen from '../../Screens/MapView'; // replace with your actual component
import PursuitsScreen from '../../Screens/YourEvents';
import Homepage from '../../Screens/Homepage';
import Fontisto from 'react-native-vector-icons/Fontisto'; // replace with your actual component

const Tab = createBottomTabNavigator();

const Navigation = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Explore'}
        component={Homepage}
        options={{
          tabBarIcon: ({}) => (
          <Fontisto name="search" size={25} color={color}/>
          ),
        }}
        />
    </Tab.Navigator>
  );
};

export default Navigation;
