import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";
import {set} from "react-native-reanimated";

// we need to create three state variables that track the amount of red, blue, green
// the question is: where do we place the state variables?
  // as three variables within the SquareScreen component OR
  // as individual state variable within ColorCounter component

// current component hierarchy: SquareScreen -> ColorCounter-ColorCounter-ColorCounter
// in this case:
  // SquareScreen needs to READ the three different state values
  // ColorCounter needs to CHANGE the three different state values

// imp! GENERALLY***, create state variables in the MOST PARENT COMPONENT that needs to READ or CHANGE a state value
  // so here, since the SquareScreen is the most parent component and it needs to READ the state value, the state values should be instantiated here
  // *** as with anything, there will be some exceptions where this rule does not apply

// if a child component needs to READ a state value, the parent can pass it down the value as a prop
// if a child component needs to CHANGE a state value, the parent can pass down a callback function to change the state value as a prop

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  
  // to address the issue of incrementing/decrementing past accepted RGB values:
    // BAD -- add if statements to each onIncrease, onDecrease block ::: this would make the JSX very unreadable
    // GOOD -- create helper function which will determine whether incrementing/decrementing the color value will result in an invalid RGB value
  // ideally, the function will work for any/all ColorCounter components
  const setColor= (color, change) => {
    switch(color) {
      case 'red':
        return (red + change > 255 || red + change < 0) ? null : setRed(red + change);
      case 'green':
        return (green + change > 255 || blue + change < 0) ? null : setGreen(green + change);
      case 'blue':
        return (blue + change > 255 || blue + change < 0) ? null : setBlue(blue + change);
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={ () => setColor('red', COLOR_INCREMENT) }
        onDecrease={ () => setColor('red', -1 * COLOR_INCREMENT) }
        color="Red"
      />
      <ColorCounter
        color="Green"
        onIncrease={ () => setColor('blue', COLOR_INCREMENT) }
        onDecrease={ () => setColor('blue', -1 * COLOR_INCREMENT) }
      />
      <ColorCounter
        color="Blue"
        onIncrease={ () => setColor('green', COLOR_INCREMENT) }
        onDecrease={ () => setColor('green', -1 * COLOR_INCREMENT) }
      />
      <View style={{height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SquareScreen;
