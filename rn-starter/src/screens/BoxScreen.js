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
          <Text style={styles.flexOneText}>Child #1</Text>
          <Text style={styles.flexTwoText}>Child #2</Text>
          <Text style={styles.flexThreeText}>Child #3</Text>
        </View>
      </View>

       <View style={styles.textView}>
        <Text style={styles.demoText}>flexDirection: 'row' DEMO</Text>
        <View style={styles.flexRowView}>
          <Text style={styles.flexOneText}>Child #1</Text>
          <Text style={styles.flexTwoText}>Child #2</Text>
          <Text style={styles.flexThreeText}>Child #3</Text>
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
        // property set on PARENT element
        // default: 'stretch' (children fill up as much HORIZONTAL space as possible)
        // 'flex-start' | 'center' | 'flex-end'
        // primary axis changes depending on flexDirection property

      // flexDirection ::: determines whether children are laid out vertically or horizontally ('column', 'row')
        // property set on PARENT element
        // default: 'column' (will fill up as much VERTICAL space as possible)
        // imp! flexDirection affects behavior of alignItems AND justifyContent --- changes primary and secondary axis
          // alignItems
            // 'column': works on horizontal axis
            // 'row': works on vertical axis
          // justifyContent
            // 'column': works on vertical axis
            // 'row': works on horizontal axis

      // justifyContent ::: affects how children are situated vertically
        // property set on PARENT element
        // default: 'flex-start' (children are pushed up to top of container)
        // 'center' | 'flex-end' | 'space-between' | 'space-around'
        // primary axis changes depending on flexDirection property

      // flex ::: makes a child in parent try take up as much space as possible (depending on the set flexDirection)
        // property set on a CHILD element
        // integer values
        // multiple children inside of one parent can have the flex property assigned
        // flex can be assigned values greater than 1
          // this will proportionately size the child components within the parent
            // 4 + 4 + 2 = 10 'sections'
            // (imagine that parent gets split into ten equal sections)
              // flexOne, flexTwo each get 40% of available space, while flexThree gets 20% of available space'

      // alignSelf ::: essentially overrides the alignItems property on the parent element
        // property set on CHILD element
        // 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'


  flexColumnView: {
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    height: 150,
  },
  flexRowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: 150,
  },
  flexOneText: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 4,
    alignSelf: 'center',
  },
  flexTwoText: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 4,
    alignSelf: 'stretch',
  },
  flexThreeText: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 2,
    alignSelf: 'center',
  }
});

export default BoxScreen;
