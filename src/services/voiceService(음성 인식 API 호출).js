const sendVoiceData = async (voiceText) => {
    try {
      const response = await fetch('https://your-lambda-endpoint.amazonaws.com/voice-command', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command: voiceText }),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('음성 명령 API 호출 실패:', error);
    }
  };
  
  export { sendVoiceData };
  