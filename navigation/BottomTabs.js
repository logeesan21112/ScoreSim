import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Config from '../common/config';

import UpcomingMatches from '../screens/Main/UpcomingMatches';
import LiveScore from '../screens/Main/LiveScore';
import Profile from '../screens/Profile';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function LogoutScreen({ navigation }) {
  useEffect(() => {
    navigation.replace('Login');
  }, []);

  return <View />;
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Config.primaryColor,
        tabBarInactiveTintColor: '#666',
      }}
    >
      <Tab.Screen
        name="Matches"
        component={UpcomingMatches}
        options={{
          tabBarLabel: 'Matches',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Live"
        component={LiveScore}
        options={{
          tabBarLabel: 'Live',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cricket" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}