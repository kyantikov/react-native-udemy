import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

// this screen is the parent of ImageDetail (reusable component)
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Lake"
        imageSource={ require('../../assets/lake.jpg') }
        score={10}
      />
      <ImageDetail
        title="City"
        imageSource={ require('../../assets/city.jpg') }
        score={10}
      />
      <ImageDetail
        title="Mountain"
        imageSource={ require('../../assets/mountain.jpg') }
        score={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ImageScreen;
