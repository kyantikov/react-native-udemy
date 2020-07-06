import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.textView}>
        <Text style={styles.bomText}>Box Screen</Text>
      </View>

      <View style={styles.textView}>
        <View style={styles.flexView}>
          <Text style={styles.flexText}>Child #1</Text>
          <Text style={styles.flexText}>Child #2</Text>
          <Text style={styles.flexText}>Child #3</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  // Box Object Model refers to height/width of a single element + the space around it
    // use this to affect the positioning of a single element
  container: {
    borderWidth: 3,
    borderColor: 'black'
  },
  textView: {
    borderWidth: 1,
    borderColor: 'blue',
    marginVertical: 10,
  },
  // bom: box object model
  bomText: {
    borderWidth: 10,
    borderColor: 'red',
    margin: 20,
    padding: 10,
  },
  // Flex Box refers to how some number of sibling elements get laid out inside a parent
    // use this to position multiple elements with a common parent
    // there are certain properties which affect how siblings are positioned in a common parent:
      // alignItems ::: affects how children are situated horizontally
        // property set on parent element (here, the View)
        // default: 'stretch' (fill up as much horizontal space as possible)
        // 'flex-start' | 'center' | 'flex-end'
  flexView: {
    alignItems: 'center',
  },
  flexText: {
    marginVertical: 5,
    borderWidth: 3,
    borderColor: 'red',
    padding: 10,
  }
});

export default BoxScreen;
