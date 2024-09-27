import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>환영합니다!</Text>
      <Button title="블록 코딩" onPress={() => navigation.navigate('Blockly')} />
      <Button title="음성 명령" onPress={() => navigation.navigate('Voice')} />
      <Button title="AI 연동" onPress={() => navigation.navigate('AI')} />
      <Button title="검색 기능" onPress={() => navigation.navigate('Search')} />
    </View>
  );
};

export default HomeScreen;
