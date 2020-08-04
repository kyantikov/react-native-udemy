import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation, route }) => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() =>
        navigation.navigate('Edit', { postId: route.params?.postId })}
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  });

  const postId = route.params?.postId;

  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === postId);

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
