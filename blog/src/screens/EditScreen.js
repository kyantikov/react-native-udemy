import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');

  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id = postId);


  return (
    <BlogPostForm
      onSubmit={(title, content) => {

      }}
    />
  )
};

const styles = StyleSheet.create({
label: {
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  }
});

export default EditScreen;
