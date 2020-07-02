import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  // imp) not the correct way to implement state
  // React does not magically watch variables
  // let counter = 0; (this along with using onPress prop to attempt to increment this variable)

  // hooks are functions that add new functionality to a functional component <----- LOL!
  // useState: hook
  // useState allows you to have stateful variables in functional components
  // will make React watch that variable and any time its value changes it will update the component on the screen

  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={ () => {
          // cannot modify state variable directly! React is not magic!
          // counter++;
          setCounter(counter + 1);
      }}/>
      <Button
        title="Decrease"
        onPress={ () => setCounter(counter - 1) }
      />
      <Text>Counter: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default CounterScreen;
