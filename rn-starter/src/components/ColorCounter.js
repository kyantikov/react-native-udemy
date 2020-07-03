import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={ styles.container }>
      <Text style={{ color: color.toLowerCase(), ...styles.buttonGroupLabel }}>{ color }</Text>
      <Button
        title={`Increase ${ color }`}
        onPress={ () => onIncrease() }
      />
      <Button
        title={`Decrease ${ color }`}
        onPress={ () => onDecrease() }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  buttonGroupLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default ColorCounter;
