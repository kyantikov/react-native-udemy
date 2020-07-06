import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const TextScreen = () => {

  const [password, setPassword] = useState('');

  // the TextInput shown here will essentially be the base of mose TextInput fields that are created for your projects
  return (
    <View>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>Enter Password: </Text>
      <TextInput
        style={ styles.input }
        autoCapitalize="none" // iOS applies auto-correct/auto-capitalize by default
        autoCorrect={false} // these props prevents that behavior from TextInput fields that do not need it: email/username/password
        value={password}
        onChangeText={ (inputValue) => setPassword(inputValue) }
      />
      {password.length <= 5
        ? <Text style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Password must be longer than 5 characters.</Text>
        : null
      }
    </View>
  );
};

// will generally need to always apply some styling to text inputs because otherwise its funky
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default TextScreen;
