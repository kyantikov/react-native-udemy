import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/SignInScreen";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
    >
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
      />
    </Stack.Navigator>
  )
};
