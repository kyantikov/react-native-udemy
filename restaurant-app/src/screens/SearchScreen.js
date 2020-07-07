import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";

import yelp from '../api/yelp';
import SearchBar from "../components/SearchBar";


const SearchScreen = () => {

  const [input, setInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchYelpApi = async (userSearchTerm) => {
    console.log('Hi theres!!!');
    try{
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: userSearchTerm,
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

  // DO NOT DO THIS!! BAD CODE!!
  // searchYelpApi('pasta'); // calls searchYelpApi when component is first rendered

  // based on the flow of component, once its rendered it comes here and hits searchYelpApi method
  // then, since the state is updated w/i searchYelpApi, the component is rerendered
  // CAN EASILY INFINITELY LOOP 

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
