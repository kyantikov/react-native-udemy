import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import { Provider as BlogProvider } from "../context/BlogContext";
import { BlogProvider } from "../context/StateBlogContext";


import IndexScreen from "../screens/IndexScreen";
import CreateScreen from "../screens/CreateScreen";
import ShowScreen from "../screens/ShowScreen";
import EditScreen from "../screens/EditScreen";

const Stack = createStackNavigator();

const BlogStack = () => {

  return (
    <Stack.Navigator
      initialRouteName="Index"
    >
      <Stack.Screen name="Index" component={IndexScreen}/>
      <Stack.Screen name="Create" component={CreateScreen}/>
      <Stack.Screen name="Show" component={ShowScreen}/>
      <Stack.Screen name="Edit" component={EditScreen}/>
    </Stack.Navigator>
  )
};

export default BlogStack;
