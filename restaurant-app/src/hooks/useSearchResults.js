import { useEffect, useState } from 'react';

import yelp from '../api/yelp';

export default () => {

  const [searchResult, setSearchResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchYelpApi = async (userSearchTerm) => {
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

  useEffect( () => {
    searchYelpApi('pasta');
  }, []);

  return [searchYelpApi, searchResult, errorMessage];
}

