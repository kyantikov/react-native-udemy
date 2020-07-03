import React, { useReducer } from "react";
import { View, StyleSheet, Button } from "react-native";

import ColorCounter from "../components/ColorCounter";

// conventionally, reducer function is defined outside of the component declaration to avoid having two variable named 'state'
// this is the reducer function that accepts:
  // state ::: object that has all of our state in it ---> { red: number, green: number, blue: number }
  // action ::: object that describes the update we want to make ---> { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
    // there is a standard way to define action objects, accepted throughout the React Native community
    // { colorToChange: 'red', amount: 15 }
    // CONVERT TO
    // { type: 'change_red', payload: 15 }
      // type ::: is a string describes the exact change operation that we want to make
      // payload ::: some data that is CRITICAL to the change operation
const reducer = (state, action) => {
  switch(action.type) {
    case 'change_red':
      // never modify state directly
      return (state.red + action.payload > 255 || state.red + action.payload < 0)
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return (state.green + action.payload > 255 || state.green + action.payload < 0)
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return (state.blue + action.payload > 255 || state.blue + action.payload < 0)
        ? state
        : { ...state, blue: state.blue + action.payload };
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
        onIncrease={ () => dispatch({ type: 'change_red', payload: COLOR_INCREMENT }) }
        onDecrease={ () => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT }) }
        color="Red"
      />
      <ColorCounter
        color="Green"
        onIncrease={ () => dispatch({ type: 'change_green', payload: COLOR_INCREMENT }) }
        onDecrease={ () => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT }) }
      />
      <ColorCounter
        color="Blue"
        onIncrease={ () => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT }) }
        onDecrease={ () => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT }) }
      />
      <View style={{height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ReducerSquareScreen;
