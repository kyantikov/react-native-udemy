import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import useSearchResults from "../hooks/useSearchResults";

import SearchBar from "../components/SearchBar";
import ResultsLists from "../components/ResultsLists";

// useEffect( () => {} ) ---> run arrow function every time the component is rendered
// useEffect( () => {}, [] ) ---> run arrow function ONLY when the component is FIRST rendered
// useEffect( () => {}, [value] ) ---> run arrow function when component is FIRST rendered AND whenever value(s) in the array changes

const SearchScreen = () => {

  const [input, setInput] = useState('');
  const [searchYelpApi, searchResult, errorMessage] = useSearchResults();

  const filterResultsByPrice = (price) => {
    return searchResult.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        input={input}
         // alternative method of calling functions in JSX (must be simple)
        onInputChange={setInput} // === { userInput => setInput(userInput) }
        onInputSubmit={ () => searchYelpApi(input) } // === { () => searchYelpApi() }
      />
      {errorMessage
        ? <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
        : <Text style={styles.resultsMessageStyle}>Found {searchResult.length} results!</Text>
      }
      <ScrollView>
        <ResultsLists results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsLists results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsLists results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessageStyle: {
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  resultsMessageStyle: {
    color: 'green',
    alignSelf: 'center',
    marginVertical: 2,
  }
});

export default SearchScreen;
