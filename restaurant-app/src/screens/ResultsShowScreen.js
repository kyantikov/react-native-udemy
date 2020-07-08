import React, {useEffect, useState} from "react";
import { View ,StyleSheet, Text} from "react-native";

import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const resultId = navigation.getParam('id');
  const name = navigation.getParam('name');

  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`${id}`);
    setResult(response.data);
  };

  useEffect( () => {
    getResult(resultId);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitleStyle}>{name}</Text>
      <Text style={styles.ratingStyle}>{result.rating} stars, {result.review_count} reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  headerTitleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  ratingStyle: {
    color: '#bab8b8',
  }
});

export default ResultsShowScreen;
