import React, { useReducer } from "react";
import { View, StyleSheet, Button } from "react-native";

import ColorCounter from "../components/ColorCounter";

// conventionally, reducer function is defined outside of the component declaration to avoid having two variable named 'state'
// this is the reducer function that accepts:
  // state ::: object that has all of our state in it ---> { red: number, green: number, blue: number }
  // action ::: object that describes the update we want to make ---> { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
const reducer = (state, action) => {
  switch(action.ColorToChange) {
    case 'red':
      // never modify state directly
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

// how this compares to using the useState hook:
  // REDUCER: accepts object of related states and returns object that contains updated state values
  // SETTER: accepts single state variable and returns its updated value

const ReducerSquareScreen = () => {

  // state variable will initially be equal to the initializer object
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

  return (
    <View>
      <ColorCounter
        onIncrease={ () => {} }
        onDecrease={ () => {} }
        color="Red"
      />
      <ColorCounter
        color="Green"
        onIncrease={ () => {} }
        onDecrease={ () => {} }
      />
      <ColorCounter
        color="Blue"
        onIncrease={ () => {} }
        onDecrease={ () => {} }
      />
      {/*<View style={{height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>*/}
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ReducerSquareScreen;
