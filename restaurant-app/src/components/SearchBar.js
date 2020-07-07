import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <View>
        <Ionicons name="ios-search" size={30} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e8e6e6',
    height: 45,
    width: 'auto',
    borderRadius: 5,
  },

  searchInput: {

  },
});

export default SearchBar;
