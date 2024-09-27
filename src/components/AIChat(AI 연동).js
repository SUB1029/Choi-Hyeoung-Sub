import React, { useState } from 'react';
import { TextInput, Button, Text, View } from 'react-native';

const AIChat = () => {
  const [inputText, setInputText] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const callAIModel = async () => {
    try {
      const response = await fetch('https://your-lambda-endpoint.amazonaws.com/invoke-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: inputText }),
      });
      const data = await response.json();
      setAiResponse(data.response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="AI에게 질문하기"
        value={inputText}
        onChangeText={setInputText}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%' }}
      />
      <Button title="질문하기" onPress={callAIModel} />
      <Text>AI 응답: {aiResponse}</Text>
    </View>
  );
};

export default AIChat;
