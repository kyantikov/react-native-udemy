import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

// import { Context } from "../context/BlogContext";
import BlogContext  from "../context/StateBlogContext";

const ShowScreen = ({ navigation, route }) => {

  const postId = route.params?.postId;

  const { state } = useContext(BlogContext);
  const blogPost = state.find(blogPost => blogPost.id === postId);

  navigation.setOptions({
    headerTitle: blogPost.title,
    headerRight: () => (
      <TouchableOpacity onPress={() =>
        navigation.navigate('Edit', { postId: route.params?.postId })}
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  });

  return (
    <View style={styles.postView}>
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
