import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const blogId = navigation.getParam('id');

  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === blogId);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default ShowScreen;
