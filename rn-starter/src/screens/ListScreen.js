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

  // part of FlatList exercise
  const friendsAgeList = [
    {key: '1', name: 'Fred', age: 22},
    {key: '2', name: 'Jeff', age: 10},
    {key: '3', name: 'Karl', age: 15},
    {key: '4', name: 'Hank', age: 34},
    {key: '5', name: 'Todd', age: 69},
    {key: '6', name: 'Alf', age: 50},
  ];


  // if defining keyExtractor function outside of JSX block, must return the field which you wish to make the 'key' of the item
  const petsListKeyExtractor = pet => { return pet.type };

  const renderPetsList = ({ item }) => {
    return <Text>{ item.type }</Text>
  }

  const renderFriendsAgeList = ({item}) => {
    console.log(item);

  }

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={friendsList}
        renderItem={ ({item}) => {
          return <Text style={styles.listText}>{ item.name }</Text>
        }}
      />
      {/*<FlatList keyExtractor={petsListKeyExtractor} data={petsList} renderItem={renderPetsList}/>*/}
      <FlatList
        data={friendsAgeList}
        renderItem={ ({item}) => {
          return (
            <Text style={styles.listText}>{ item.name } - Age { item.age }</Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  breakText: {
    fontSize: 40,
  },
  listText: {
    marginVertical: 30
  }
});

export default ListScreen;
