import React from "react";
import { View, StyleSheet, Button } from "react-native";

import ColorCounter from "../components/ColorCounter";

const ReducerSquareScreen = () => {

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
      <View style={{height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ReducerSquareScreen;
