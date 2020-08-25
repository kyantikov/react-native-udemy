import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import { Provider as BlogProvider } from "../context/BlogContext";
import { BlogProvider } from "../context/StateBlogContext";

import IndexScreen from "../screens/IndexScreen";
import CreateScreen from "../screens/CreateScreen";
import ShowScreen from "../screens/ShowScreen";
import EditScreen from "../screens/EditScreen";
import SuperUserScreen from "../screens/SuperUserScreen";

const Stack = createStackNavigator();

const SuperUserBlogStack = () => {

  return (
    <Stack.Navigator
      initialRouteName="SuperUser"
    >
      <Stack.Screen name="SuperUser" component={SuperUserScreen} />
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Show" component={ShowScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  )
};

export default SuperUserBlogStack;
