
import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';

const AiChatScreen = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const sendToAI = async () => {
    const result = await fetch('https://your-api-endpoint.com/ai', {
      method: 'POST',
      body: JSON.stringify({ prompt: input }),
    });
    const data = await result.json();
    setResponse(data.response);
  };

  return (
    <View>
      <TextInput value={input} onChangeText={setInput} />
      <Button title="Send to AI" onPress={sendToAI} />
      <Text>{response}</Text>
    </View>
  );
};

export default AiChatScreen;
