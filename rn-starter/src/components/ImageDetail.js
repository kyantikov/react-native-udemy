import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// this component is the child in reference to ImageScreen
const ImageDetail = (props) => {
  console.log(props);

  return (
    <View>
      <Image source={ props.imageSource } style={styles.image}></Image>
      <Text>{ props.title }</Text>
      <Text>Image Score - { props.score }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200
  }
});

export default ImageDetail;
