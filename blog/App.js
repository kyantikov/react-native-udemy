import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "./src/context/BlogContext";
import { BlogStack } from "./src/navigation/BlogStack";

// Context API solves the problem of needing to pass data down to a nested child component
  // saves having to pass data directly through each child
  // more complicated to set up

export default App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <BlogStack />
      </NavigationContainer>
    </Provider>
    );
}
