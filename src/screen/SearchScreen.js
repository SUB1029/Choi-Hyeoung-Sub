
import React, { useState } from 'react';
import { Button, TextInput, Text, View } from 'react-native';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async () => {
    const result = await fetch(`https://your-api-endpoint.com/search?q=${query}`);
    const data = await result.json();
    setResults(data.items);
  };

  return (
    <View>
      <TextInput value={query} onChangeText={setQuery} />
      <Button title="Search" onPress={search} />
      {results.map((item, index) => (
        <Text key={index}>{item.title}</Text>
      ))}
    </View>
  );
};

export default SearchScreen;
