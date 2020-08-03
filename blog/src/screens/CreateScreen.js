import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { Context } from "../context/BlogContext";

const CreateScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={ text => setTitle(text) }
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={ text => setContent(text) }
      />
      <Button title="Add Blog Post" onPress={ () => addBlogPost(title, content) } />
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

export default CreateScreen;
