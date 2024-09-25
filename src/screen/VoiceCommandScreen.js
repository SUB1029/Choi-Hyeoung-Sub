
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Voice from 'react-native-voice';

const VoiceCommandScreen = () => {
  const [text, setText] = useState('');

  const startRecognition = async () => {
    try {
      await Voice.start('en-US');
      Voice.onSpeechResults = (result) => {
        setText(result.value[0]);
      };
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <Button title="Start Voice Command" onPress={startRecognition} />
      <Text>{text}</Text>
    </View>
  );
};

export default VoiceCommandScreen;
