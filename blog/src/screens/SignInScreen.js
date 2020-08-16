import React, {useContext} from 'react';
import { View, StyleSheet, Button } from "react-native";

import { Context as AuthContext } from '../context/AuthContext';

const SignInScreen = () => {

  const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Button
        title="Sign In"
        onPress={signIn}
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
