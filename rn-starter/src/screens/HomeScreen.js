import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>

      <Button
        title="Go to Components Demo"
        onPress={ () =>  navigation.navigate('Components') }
      />
      <Button
      title="Go to List Demo"
      onPress={ () =>  navigation.navigate('List') }
      />
      <Button
      title="Go to Image Components Demo"
      onPress={ () =>  navigation.navigate('Image') }
      />
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
