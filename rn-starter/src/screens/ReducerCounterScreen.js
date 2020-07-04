import React, { useReducer } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase_count':
      return { ...state, count: state.count + action.payload };
    case 'decrease_count':
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

const INCREMENTER = 1;

const ReducerCounterScreen = () => {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={ () => { dispatch({ type: 'increase_count', payload: INCREMENTER }) }}
      />
      <Button
        title="Decrease"
        onPress={ () => { dispatch({ type: 'decrease_count', payload: -1 * INCREMENTER }) }}
      />
      <Text>Counter: { state.count }</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReducerCounterScreen;
