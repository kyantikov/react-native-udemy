import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";

import yelp from '../api/yelp';
import SearchBar from "../components/SearchBar";


const SearchScreen = () => {

  const [input, setInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchYelpApi = async () => {
    try{
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchResult,
          location: 'chicago',
        }
      });
      const { businesses } = response.data;
      setSearchResult(businesses);
    }
    catch (error) {
      setErrorMessage('Something went terribly wrong...')
    }
  };

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        input={input}
         // alternative method of calling functions in JSX (must be simple)
        onInputChange={setInput} // === { userInput => setInput(userInput) }
        onInputSubmit={searchYelpApi} // === { () => searchYelpApi() }
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
