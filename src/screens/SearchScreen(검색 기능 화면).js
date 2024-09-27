import React, { useState } from 'react';
import { TextInput, Button, Text, View } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = async () => {
    // 검색 API 호출 (API 연동)
    try {
      const response = await fetch(`https://your-search-api.com/search?q=${searchQuery}`);
      const data = await response.json();
      setSearchResult(data.result);
    } catch (error) {
      console.error('검색 실패:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="검색어 입력"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%' }}
      />
      <Button title="검색" onPress={handleSearch} />
      <Text>검색 결과: {searchResult}</Text>
    </View>
  );
};

export default SearchScreen;
