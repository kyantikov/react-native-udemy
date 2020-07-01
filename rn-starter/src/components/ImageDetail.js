import React from "react";
import { View, Text, StyleSheet } from "react-native";

// this component is the child in reference to ImageScreen
const ImageDetail = (props) => {
  console.log(props);

  return (
    <Text>{props.title}</Text>
  )
};

const styles = StyleSheet.create({

});

export default ImageDetail;
