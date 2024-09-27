const sendAIRequest = async (userInput) => {
    try {
      const response = await fetch('https://your-lambda-endpoint.amazonaws.com/ai-interaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: userInput }),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('AI API 호출 실패:', error);
    }
  };
  
  export { sendAIRequest };
  