import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.textView}>
          <Text style={styles.demoText}>BOX OBJECT MODEL DEMO</Text>
        <Text style={styles.bomText}>Box Screen</Text>
      </View>

      <View style={styles.textView}>
        <Text style={styles.demoText}>FLEX DEMO</Text>
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
  demoText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red'
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
        // default: 'stretch' (fill up as much HORIZONTAL space as possible)
        // 'flex-start' | 'center' | 'flex-end'

      // flexDirection ::: determines whether children are laid out vertically or horizontally ('column', 'row')
        // default: 'column' (will fill up as much VERTICAL space as possible)
        // imp! flexDirection affects behavior of alignItems --- changes primary and secondary axis
          // 'column': alignItems works on the horizontal axis
          // 'row': alignItems works on the vertical axis
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 200,
  },
  flexText: {
    marginVertical: 5,
    borderWidth: 3,
    borderColor: 'red',
    // padding: 10,
  }
});

export default BoxScreen;
