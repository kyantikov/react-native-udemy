import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons style={styles.iconStyle} name="ios-search"  />
      <TextInput
        style={styles.searchInputStyle}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#e8e6e6',
    height: 45,
    borderRadius: 5,
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 9,
    marginTop: 2,
  },
  searchInputStyle: {
    fontSize: 17,
    flex: 1,
  },
});

export default SearchBar;
