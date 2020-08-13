import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Provider as BlogProvider} from "./src/context/BlogContext";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Context as AuthContext } from "./src/context/AuthContext";

import { AuthStack } from "./src/navigation/AuthStack";
import { BlogStack } from "./src/navigation/BlogStack";

// Context API solves the problem of needing to pass data down to a nested child component
  // saves having to pass data directly through each child
  // more complicated to set up

export default App = () => {

  const authState = useContext(AuthContext);

  return (
    <AuthProvider>
      <BlogProvider>
        <NavigationContainer>
          {authState.isSignedIn
            ? <BlogStack />
            : <AuthStack />
          }
        </NavigationContainer>
      </BlogProvider>
    </AuthProvider>
    );
}
