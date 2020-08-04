import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

const EditScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');

  return (
    <View>
      <Text>Edit Screen - {postId}</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default EditScreen;
