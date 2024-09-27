const sendBlockData = async (blockData) => {
    try {
      const response = await fetch('https://your-lambda-endpoint.amazonaws.com/block-coding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blockData),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('블록 코딩 API 호출 실패:', error);
    }
  };
  
  export { sendBlockData };
  