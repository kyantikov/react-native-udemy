import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import BlogContext from "../context/BlogContext";
import {add} from "react-native-reanimated";

// useContext looks at Context object and access value inside of it

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={ blogPost => blogPost.title}
        renderItem={ ({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({

});

export default IndexScreen;
