import React from "react";
import { View, StyleSheet, Text } from "react-native";

// Box Object Model refers to height/width of an element + the space around it
  // use this to affect the positioning of a single element
const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'green'
  },
  textStyle: {
    borderWidth: 10,
    borderColor: 'red',
    margin: 20,
    padding: 10,
  }
});

export default BoxScreen;
