import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const blogId = navigation.getParam('id');

  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === blogId);

  return (
    <View style={styles.postView}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  postView: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 7,
    margin: 5,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
    marginTop: 15,
  },
});

export default ShowScreen;
