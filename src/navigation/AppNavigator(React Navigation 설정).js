import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import BlocklyScreen from '../screens/BlocklyScreen';
import VoiceScreen from '../screens/VoiceScreen';
import AIScreen from '../screens/AIScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Blockly" component={BlocklyScreen} />
        <Stack.Screen name="Voice" component={VoiceScreen} />
        <Stack.Screen name="AI" component={AIScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
