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
        <Text style={styles.demoText}>flexDirection: 'column' DEMO</Text>
        <View style={styles.flexColumnView}>
          <Text style={styles.flexText}>Child #1</Text>
          <Text style={styles.flexText}>Child #2</Text>
          <Text style={styles.flexText}>Child #3</Text>
        </View>
      </View>

       <View style={styles.textView}>
        <Text style={styles.demoText}>flexDirection: 'row' DEMO</Text>
        <View style={styles.flexRowView}>
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
        // property set on parent element (here, flexView)
        // default: 'stretch' (children fill up as much HORIZONTAL space as possible)
        // 'flex-start' | 'center' | 'flex-end'
        // primary axis changes depending on flexDirection property

      // flexDirection ::: determines whether children are laid out vertically or horizontally ('column', 'row')
        // default: 'column' (will fill up as much VERTICAL space as possible)
        // imp! flexDirection affects behavior of alignItems AND justifyContent --- changes primary and secondary axis
          // alignItems
            // 'column': works on horizontal axis
            // 'row': works on vertical axis
          // justifyContent
            // 'column': works on vertical axis
            // 'row': works on horizontal axis

      // justifyContent ::: affects how children are situated vertically
        // property set on parent element (here, flexView)
        // default: 'flex-start' (children are pushed up to top of container)
        // 'center' | 'flex-end' | 'space-between' | 'space-around'
        // primary axis changes depending on flexDirection property
  flexColumnView: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 150,
  },
  flexRowView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 150,
  },
  flexText: {
    // marginVertical: 5,
    borderWidth: 3,
    borderColor: 'red',
    // padding: 10,
  }
});

export default BoxScreen;
