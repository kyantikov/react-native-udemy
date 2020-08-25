import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { Context as AuthContext } from '../context/AuthContext';
import AuthStack from "./AuthStack";
import MainNavigator from "./MainNavigator";

const RootStack = () => {

  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {state.isSignedIn
        ? <MainNavigator />
        : <AuthStack />
      }
    </NavigationContainer>
  );

};

export default RootStack;
