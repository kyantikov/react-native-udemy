import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { Context as AuthContext } from '../context/AuthContext';
import { BlogStack } from "./BlogStack";
import { AuthStack } from "./AuthStack";

const RootStack = () => {

  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {state.isSignedIn
        ? <BlogStack />
        : <AuthStack />
      }
    </NavigationContainer>
  );

};

export default RootStack;
