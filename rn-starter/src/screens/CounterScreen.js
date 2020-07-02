import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// ****** BTS: CounterScreen() state ******
// app is initialized
// when user first navigates to CounterScreen, 'counter' piece of state is initialized (counter = 0)
// user taps on 'increase' button and 'onPress' callback runs
// 'onPress' calls 'setCounter' and updates its value
// after VERY BRIEF pause, React rerenders/re-runs the CounterScreen()
// React knows that CounterScreen() has been executed before and does not reinitialize the variable 'counter' (which woulds set it back to zero)
// counter now has an updated value of '1'
// we return some JSX that references the updated 'counter' variable

// ****** few notes/rules on state ******
  // this is a functional component that uses function-based state
    // React also has class-based components that have access to state
    // >>>>> functional components seem to be preferred method of creating components w/i the React community <<<<<
  // NEVER DIRECTLY MODIFY A STATE VARIABLE
    // React does not detect this change
    // only use the 'setter' function provided by useState hook
  // can name the state variable anything we wish ::: const [<stateName>, set<StateName>]
  // can track any kind of data that changes over time
    // number, string, array of objects, etc.; can be complex data
  // when a component gets rerendered, ALL of its children get rerendered as well
  // state variable can be passed to a child component
    // at that point, state variable is now being used as props
  // if there are multiple instances of a component that use state, they will each have their own separate, independent state variables -- they will not be not be shared

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
