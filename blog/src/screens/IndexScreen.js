import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Feather } from '@expo/vector-icons'

import { Context } from "../context/BlogContext";

const renderBlogList = ({ item }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{item.title}</Text>
      <Feather name="trash" style={styles.icon}/>
    </View>
  )
};

const IndexScreen = () => {
  // useContext looks at Context object and access value inside of it
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={ blogPost => blogPost.title}
        renderItem={renderBlogList}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey'
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  }
});

export default IndexScreen;
