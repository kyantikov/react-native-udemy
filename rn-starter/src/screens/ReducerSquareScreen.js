import React, { useReducer } from "react";
import { View, StyleSheet, Button } from "react-native";

import ColorCounter from "../components/ColorCounter";

// conventionally, reducer function is defined outside of the component declaration to avoid having two variable named 'state'
// this is the reducer function that accepts:
  // state ::: object that has all of our state in it ---> { red: number, green: number, blue: number }
  // action ::: object that describes the update we want to make ---> { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
const reducer = (state, action) => {
  switch(action.colorToChange) {
    case 'red':
      // never modify state directly
      return (state.red + action.amount > 255 || state.red + action.amount < 0)
        ? state
        : { ...state, red: state.red + action.amount };
    case 'green':
      return (state.green + action.amount > 255 || state.green + action.amount < 0)
        ? state
        : { ...state, green: state.green + action.amount };
    case 'blue':
      return (state.blue + action.amount > 255 || state.blue + action.amount < 0)
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const COLOR_INCREMENT = 15;

// how this compares to using the useState hook:
  // REDUCER: accepts object of related states and returns object that contains updated state values
  // SETTER: accepts single state variable and returns its updated value

const ReducerSquareScreen = () => {

  // state variable will initially be equal to the initializer object
  // when useReducer is called, it returns two things:
    // state: current state
    // dispatch (aka runMyReducer): invokes reducer and accepts object that describes how we want to change our state -- 'action' argument in reducer function
  // much like when using the setter of useState hook, useReducer will also rerender the screen when the state updates as a result of our reducer function being called
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={ () => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT }) }
        onDecrease={ () => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT }) }
        color="Red"
      />
      <ColorCounter
        color="Green"
        onIncrease={ () => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT }) }
        onDecrease={ () => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT }) }
      />
      <ColorCounter
        color="Blue"
        onIncrease={ () => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT }) }
        onDecrease={ () => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT }) }
      />
      <View style={{height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ReducerSquareScreen;
