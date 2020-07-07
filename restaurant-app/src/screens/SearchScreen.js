import React from "react";
import { View, StyleSheet, Text } from "react-native";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default SearchScreen;
