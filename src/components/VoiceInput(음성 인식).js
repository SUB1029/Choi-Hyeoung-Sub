import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Voice from 'react-native-voice';

const VoiceInput = () => {
  const [recognizedText, setRecognizedText] = useState('');

  const startRecognition = () => {
    Voice.start('en-US');
    Voice.onSpeechResults = (event) => {
      const resultText = event.value[0];
      setRecognizedText(resultText);
      // 음성 데이터를 백엔드로 전송하는 로직
    };
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="음성 인식 시작" onPress={startRecognition} />
      <Text>인식된 텍스트: {recognizedText}</Text>
    </View>
  );
};

export default VoiceInput;
