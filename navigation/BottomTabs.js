import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Config from '../common/config';

import UpcomingMatches from '../screens/UpcomingMatches';
import MyBets from '../screens/MyBets';
import Wallet from '../screens/Wallet';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Config.primaryColor,
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: { backgroundColor: 'white', borderTopWidth: 0, elevation: 5 },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'UpcomingMatches') iconName = 'home';
          else if (route.name === 'MyBets') iconName = 'ticket';
          else if (route.name === 'Wallet') iconName = 'wallet';
          else if (route.name === 'Profile') iconName = 'dots-vertical';
          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="UpcomingMatches" component={UpcomingMatches} />
      <Tab.Screen name="MyBets" component={MyBets} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
