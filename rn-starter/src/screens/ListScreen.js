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
    {name: 'Fred'},
    {name: 'Jeff'},
    {name: 'Karl'},
    {name: 'Hank'},
    {name: 'Todd'},
    {name: 'Alf'},
  ];

  const renderFriendsList = ({ item }) => {
    return <Text>{item.name}</Text>
  };

  return (
    <FlatList data={friendsList} renderItem={renderFriendsList}></FlatList>
  );
};

const styles = StyleSheet.create({

});

export default ListScreen;
