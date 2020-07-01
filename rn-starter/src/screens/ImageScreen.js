import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

// this screen is the parent of ImageDetail (reusable component)
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Lake" />
      <ImageDetail title="City" />
      <ImageDetail title="Mountain" />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ImageScreen;
