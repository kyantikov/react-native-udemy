import React from 'react';
import { View, StyleSheet, Button } from "react-native";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Sign In"
        onPress={ () => console.log('Signing in ... ') }
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  }
});

export default SignInScreen;
