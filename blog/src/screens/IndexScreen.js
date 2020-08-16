import React, { useContext } from "react";
import { View, Text, StyleSheet,
  FlatList, Button, TouchableOpacity
} from "react-native";
import { Feather } from '@expo/vector-icons'

// import { Context as BlogContext } from "../context/BlogContext";
import BlogContext  from "../context/StateBlogContext";
import { Context as AuthContext } from '../context/AuthContext';


const IndexScreen = ({ navigation }) => {

  const { signOut } = useContext(AuthContext);

  navigation.setOptions({
    headerLeft: () => (
      <Button title={'Sign Out'} onPress={signOut} />
    ),
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  });

  // useContext looks at Context object and access value inside of it
  const { state, deleteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={ blogPost => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={ () => navigation.navigate('Show', { postId: item.id }) }>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={ () => deleteBlogPost(item.id) }>
                  <Feather name="trash" style={styles.icon}/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
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
