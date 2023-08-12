import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import repositories from '../data/BDlesgirls.js'

const sampleBars = [
    { id: 1, name: 'Bar A' },
    { id: 2, name: 'Bar B' },
    { id: 3, name: 'Nightclub X' },
    // Add more bar objects
  ];

  
const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBars, setFilteredBars] = useState([]);

  const handleSearchInputChange = (text) => {
    setSearchQuery(text);
    filterBars(text);
  };

  const filterBars = (query) => {
    const filtered = sampleBars.filter(
      (bar) => bar.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBars(filtered);
  };

  return (
    <View>
      <TextInput
        placeholder="Search bars..."
        value={searchQuery}
        onChangeText={handleSearchInputChange}
      />
      <FlatList
        data={filteredBars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default SearchScreen;
