import React from "react";

import { Provider as AuthProvider } from "./src/context/AuthContext";

import RootStack from "./src/navigation/RootStack";


// Context API solves the problem of needing to pass data down to a nested child component
  // saves having to pass data directly through each child
  // more complicated to set up

export default App = () => {

  return (
    <AuthProvider>
      <RootStack />
    </AuthProvider>
    );
}
