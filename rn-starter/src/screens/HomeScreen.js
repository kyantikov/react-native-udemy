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
      <Button
      title="Go to Counter Demo"
      onPress={ () =>  navigation.navigate('Counter') }
      />
      <Button
      title="Go to Color Demo"
      onPress={ () =>  navigation.navigate('Color') }
      />
       <Button
      title="Go to Square Demo"
      onPress={ () =>  navigation.navigate('Square') }
      />
      <Button
      title="Go to Reducer Square Demo"
      onPress={ () =>  navigation.navigate('ReducerSquare') }
      />
      <Button
      title="Go to Reducer Counter Demo"
      onPress={ () =>  navigation.navigate('ReducerCounter') }
      />
      <Button
      title="Go to Text Input Demo"
      onPress={ () =>  navigation.navigate('Text') }
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
