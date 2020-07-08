import React from "react";
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";

import { withNavigation } from "react-navigation";

import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={ result => result.id }
        renderItem={ ({ item }) => {
          return (
            <TouchableOpacity onPress={ () => navigation.navigate("ResultsShow") }>
              <ResultsDetail result={item}/>
            </TouchableOpacity>
          );
        } }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 5,
  }
});

// high order component from 'react-navigation' that enables the component passed through it to have access the navigation prop
  // high order component ::: function that takes a component and returns a new component
    // useful when you cannot pass navigation prop to component directly OR
    // dont want to pass it in the case of a deeply nest child
export default withNavigation(ResultsList);
