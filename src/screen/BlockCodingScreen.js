
import React from 'react';
import { WebView } from 'react-native-webview';
import { View, Text } from 'react-native';

const BlockCodingScreen = () => {
  const handleWebViewMessage = (event) => {
    const blockData = event.nativeEvent.data;
    console.log('Received block data:', blockData);
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'path-to-your-blockly-html-file' }}
        onMessage={handleWebViewMessage}
      />
      <Text>블록 코딩 UI</Text>
    </View>
  );
};

export default BlockCodingScreen;
