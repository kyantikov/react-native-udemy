import React from "react";

const BlogContext = React.createContext();

// using 'children' prop provides the BlogContext with any child components that it contains
  // in this case, we are providing <App /> ... (see in App.js)
  // that means that any screen inside of the stack navigator will be provided with the BlogContext API that we created

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider>
      {children}
    </BlogContext.Provider>
  )
};
