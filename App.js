import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Register from './screens/Register';
import UpcomingMatches from './screens/UpcomingMatches';
import BottomTabs from './navigation/BottomTabs';
import LiveScore from './screens/LiveScore';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="UpcomingMatches" component={UpcomingMatches} />
        <Stack.Screen name="LiveScore" component={LiveScore} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
