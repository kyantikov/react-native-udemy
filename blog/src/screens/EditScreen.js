import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation, route }) => {
  const postId = route.params?.postId;

  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === postId);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(postId, title, content, () => navigation.pop());
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
