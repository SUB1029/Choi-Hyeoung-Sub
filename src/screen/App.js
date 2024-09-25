import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AiChatScreen from './src/screen/AiChatScreen';
import BlockCodingScreen from './src/screen/BlockCodingScreen';
import SearchScreen from './src/screen/SearchScreen';
import VoiceCommandScreen from './src/screen/VoiceCommandScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="AI Chat" component={AiChatScreen} />
        <Stack.Screen name="Block Coding" component={BlockCodingScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Voice Command" component={VoiceCommandScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
