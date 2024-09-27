import React, { useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';

const BlockEditor = () => {
  const webviewRef = useRef(null);

  const onMessage = (event) => {
    const blockData = event.nativeEvent.data; // 블록 코딩 결과 데이터
    console.log("Blockly Data:", blockData);
    // 백엔드로 데이터를 전송하는 로직
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webviewRef}
        originWhitelist={['*']}
        source={{ uri: 'https://your-blockly-url.com' }} // Blockly UI를 제공하는 URL
        onMessage={onMessage}
        javaScriptEnabled={true}
      />
    </View>
  );
};

export default BlockEditor;
