import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

// this screen is the parent of ImageDetail (reusable component)
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Lake" imageSource={ require('../../assets/lake.jpg') }/>
      <ImageDetail title="City" imageSource={ require('../../assets/city.jpg') } />
      <ImageDetail title="Mountain" imageSource={ require('../../assets/mountain.jpg') }/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ImageScreen;
