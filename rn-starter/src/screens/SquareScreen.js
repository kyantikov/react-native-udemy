import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

// we need to create three state variables that track the amount of red, blue, green
// the question is: where do we place the state variables?
  // as three variables within the SquareScreen component OR
  // as individual state variable within ColorCounter component

// current component hierarchy: SquareScreen -> ColorCounter-ColorCounter-ColorCounter
// in this case:
  // SquareScreen needs to READ the three different state values
  // ColorCounter needs to CHANGE the three different state values

// imp! GENERALLY, create state variables in the MOST PARENT COMPONENT that needs to READ or CHANGE a state value
  // so here, since the SquareScreen is the most parent component and it needs to READ the state value, the state values should be instantiated here
  // *** as with anything, there will be some exceptions where this rule does not apply

// if a child component needs to READ a state value, the parent can pass it down the value as a prop
// if a child component needs to CHANGE a state value, the parent can pass down a callback function to change the state value as a prop

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="Red" />
      <ColorCounter color="Green" />
      <ColorCounter color="Blue" />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SquareScreen;
