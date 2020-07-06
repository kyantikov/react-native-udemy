import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const TextScreen = () => {
  return (
    <View>
      {/* - by default, iOS will auto-correct and auto-capitalize the TextInput field.
            - sometimes, this behavior is undesired, such as in the case of an email/username/password field
            - there are two props that prevent iOS TextInput fields from having this behavior
              - autoCapitalize: 'none' | 'sentences' | 'words' | 'characters'
              - autoCorrect: boolean  */}
      <TextInput
        style={ styles.input }
        autoCapitalize="none"
        autoCorrect={false}
      />
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
