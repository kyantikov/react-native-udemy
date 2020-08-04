import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');

  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id = postId);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={ newTitle => setTitle(newTitle) }
      />

      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={ newContent => setContent(newContent) }
      />
    </View>
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
