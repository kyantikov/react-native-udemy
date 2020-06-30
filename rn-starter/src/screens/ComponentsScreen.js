import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  // rules of jsx:
    // can assemble different JSX elements like normal HTML
    // can configure different JSX elements on the fly using 'props' (=properties)
      // props will be used to customize our own components that we create
      // imp: props = @inputs
    // can refer to JavaScript variable inside of a JSX block using curly braces
      // variables may reference strings, numbers, arrays of both but NOT JS objects (will receive error)
    // can assign JSX elements to a variable, then show that variable inside of a JSX block
      // allows to create JSX conditionally, ahead-of-time (AoT)

  const name = 'Kirill';
  const anotherElement = <Text style={styles.headerTextStyle}>Getting started with React Native!</Text>

  return (
    <View>
      {anotherElement}
      <Text style={styles.textStyle}>My name is {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 45
  },
  textStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
