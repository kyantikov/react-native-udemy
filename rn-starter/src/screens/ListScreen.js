import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// FlatList Component:
  // turns an array into a list of elements
  // required to pass in 'data' prop
  // required to pass in 'renderItem' prop
    // function that turns each individual item into an element

const ListScreen = () => {
  // without providing a 'key' for each list item, list will be rendered but warning will be given
  // becomes an issue when you being to modify the original array of data
    // when altering the original array and keys are not provided, RN will:
      // delete every element on the screen, AND
      // rebuild from scratch based on the updated array
    // this is undesired behavior
  const friendsList = [
    {key: '1', name: 'Fred'},
    {key: '2', name: 'Jeff'},
    {key: '3', name: 'Karl'},
    {key: '4', name: 'Hank'},
    {key: '5', name: 'Todd'},
    {key: '6', name: 'Alf'},
  ];

  const petsList = [
    {type: 'dog'},
    {type: 'lizard'},
    {type: 'giraffe'},
    {type: 'rock'},
    {type: 'i'},
    {type: 'hippo'},
  ];

  // if defining keyExtractor function outside of JSX block, must return the field which you wish to make the 'key' of the item
  const petsListKeyExtractor = pet => { return pet.type };

  const renderFriendsList = ({ item }) => {
    return <Text>{ item.name }</Text>
  };
  const renderPetsList = ({ item }) => {
    return <Text>{ item.type }</Text>
  }

  return (
    <View>
      <FlatList data={friendsList} renderItem={renderFriendsList}/>
      <Text style={styles.breakText}>Break</Text>
      <FlatList keyExtractor={petsListKeyExtractor} data={petsList} renderItem={renderPetsList}/>
    </View>
  );
};

const styles = StyleSheet.create({
  breakText: {
    fontSize: 40,
  }
});

export default ListScreen;
