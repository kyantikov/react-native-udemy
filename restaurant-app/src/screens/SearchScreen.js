import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import yelp from '../api/yelp';
import SearchBar from "../components/SearchBar";


const SearchScreen = () => {

  const [input, setInput] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  return (
    <View style={styles.container}>
      <SearchBar
        input={input}
        onInputChange={ (userInput) => setInput(userInput) }
        onInputSubmit={ () => console.log('input submitted from search screen') }
      />
      <Text>We have found {restaurants.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default SearchScreen;
