import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.textView}>
          <Text style={styles.demoText}>BOX OBJECT MODEL DEMO</Text>
        <Text style={styles.bomText}>Box Screen</Text>
      </View>

      <View style={styles.textView}>
        <Text style={styles.demoText}>flexDirection: 'column' DEMO</Text>
        <View style={styles.flexColumnView}>
          <Text style={styles.flexOneText}>Child #1</Text>
          <Text style={styles.flexTwoText}>Child #2</Text>
          <Text style={styles.flexThreeText}>Child #3</Text>
        </View>
      </View>

      <View style={styles.textView}>
        <Text style={styles.demoText}>flexDirection: 'row' DEMO</Text>
        <View style={styles.flexRowView}>
          <Text style={styles.flexOneText}>Child #1</Text>
          <Text style={styles.flexTwoText}>Child #2</Text>
          <Text style={styles.flexThreeText}>Child #3</Text>
        </View>
      </View>

      <View style={styles.textView}>
        <Text style={styles.demoText}>Absolute Fill DEMO</Text>
        <View style={styles.absoluteFillView}>
          <Text style={styles.flexOneText}>Child #1</Text>
          <Text style={styles.absoluteFillText}>Child #2</Text>
          <Text style={styles.flexThreeText}>Child #3</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  // see styleNotes.txt for box object model, flex box, and position notes
  container: {
    borderWidth: 3,
    borderColor: 'black'
  },
  demoText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red'
  },
  textView: {
    borderWidth: 1,
    borderColor: 'blue',
    marginVertical: 10,
  },
  // bom: box object model
  bomText: {
    borderWidth: 10,
    borderColor: 'red',
    margin: 20,
    padding: 10,
  },

  flexColumnView: {
    alignItems: 'center',
    // justifyContent: 'flex-start',
    height: 100,
  },
  flexRowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 100,
  },
  flexOneText: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 4,
    // alignSelf: 'center',
  },
  flexTwoText: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 4,
    // position: 'absolute',
    top: 23,
    left: 60,

  },
  flexThreeText: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 2,
    // alignSelf: 'center',
  },

  absoluteFillView: {
    height: 150,
  },
  absoluteFillText: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    // ...StyleSheet.absoluteFillObject, // achieves same result as above 5 lines
  }
});

export default BoxScreen;
