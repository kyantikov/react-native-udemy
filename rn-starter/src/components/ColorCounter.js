import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ColorCounter = ({ color }) => {
  return (
    <View style={ styles.container }>
      <Text style={{ color: color.toLowerCase(), ...styles.buttonGroupLabel }}>{ color }</Text>
      <Button title={`Increase ${ color }`} onPress={ () => {} } />
      <Button title={`Decrease ${ color }`} onPress={ () => {} } />
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
