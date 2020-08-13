import React, { useReducer } from 'react';

// Context API is just a system of communicating information -- it is not used as a state management tool
  // does not entirely replace state management libraries -- like redux

// this function 'automates' the creation of Context objects
  // simplifies process and reduces repetition among other Data Contexts
export default (reducer, actions, initialState) => {
  const Context = React.createContext({});

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
