import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import useSearchResults from "../hooks/useSearchResults";

import SearchBar from "../components/SearchBar";

// useEffect( () => {} ) ---> run arrow function every time the component is rendered
// useEffect( () => {}, [] ) ---> run arrow function ONLY when the component is FIRST rendered
// useEffect( () => {}, [value] ) ---> run arrow function when component is FIRST rendered AND whenever value(s) in the array changes

const SearchScreen = () => {

  const [input, setInput] = useState('');
  const [searchYelpApi, searchResult, errorMessage] = useSearchResults();

  return (
    <View style={styles.containerStyle}>

      <SearchBar
        input={input}
         // alternative method of calling functions in JSX (must be simple)
        onInputChange={setInput} // === { userInput => setInput(userInput) }
        onInputSubmit={ () => searchYelpApi(input) } // === { () => searchYelpApi() }
      />
      {errorMessage
        ? <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
        : <Text>We have found {searchResult.length} results.</Text>
      }

    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
  },
  errorMessageStyle: {
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default SearchScreen;
