import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider as BlogProvider} from "../context/BlogContext";

import IndexScreen from "../screens/IndexScreen";
import CreateScreen from "../screens/CreateScreen";
import ShowScreen from "../screens/ShowScreen";
import EditScreen from "../screens/EditScreen";

const Stack = createStackNavigator();

export const BlogStack = () => {
  return (
    <BlogProvider>
      <Stack.Navigator
        initialRouteName="Index"
      >
        <Stack.Screen
          name="Index"
          component={IndexScreen}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
        />
      </Stack.Navigator>
    </BlogProvider>
  )
};
