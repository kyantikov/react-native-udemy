import React, { useReducer } from "react";
import { View, StyleSheet, Button, Text } from "react-native";


const ReducerCounterScreen = () => {


  return (
    <View>
      <Button
        title="Increase"
        onPress={ () => {
      }}/>
      <Button
        title="Decrease"
        onPress={ () => {} }
      />
      <Text>Counter: {}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReducerCounterScreen;
