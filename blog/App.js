import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { Provider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import CreateScreen from "./src/screens/CreateScreen";
import ShowScreen from "./src/screens/ShowScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
  }
);

const App = createAppContainer(navigator);

// Context API solves the problem of needing to pass data down to a nested child component
  // saves having to pass data directly through each child
  // more complicated to set up

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
    );
}
