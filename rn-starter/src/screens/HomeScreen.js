import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {

  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        title="Go to Components Demo"
        onPress={ () =>  props.navigation.navigate('Components') }/>
      <TouchableOpacity onPress={ () => props.navigation.navigate('List')}>
        <Text style={styles.simpleButton}>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  simpleButton: {
    marginVertical: 20
  },
});

export default HomeScreen;
