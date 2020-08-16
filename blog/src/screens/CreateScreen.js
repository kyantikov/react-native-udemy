import React, { useContext } from "react";
import { StyleSheet } from "react-native";

// import { Context } from "../context/BlogContext";
import BlogContext  from "../context/StateBlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content);
        navigation.navigate('Index');
      }}
    />
  )
};

const styles = StyleSheet.create({});


export default CreateScreen;
