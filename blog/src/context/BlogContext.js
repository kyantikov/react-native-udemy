import React, { useState, useReducer } from "react";

// Context API is just a system of communicating information -- it is not used as a state management tool
  // does not entirely replace state management libraries -- like redux
const BlogContext = React.createContext();

// using 'children' prop provides the BlogContext with any child components that it contains
  // in this case, we are providing <App /> ... (see in App.js)
  // that means that any screen inside of the stack navigator will be provided with the BlogContext API that we created

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog_post':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    case 'edit_blog_post':
    case 'delete_blog_post':
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {

  // by creating a state variable inside of the BlogProvider, any Screen + its children will receive this state variable
  // const [blogPosts, setBlogPosts] = useState([]);

  // addBlogPost controls when this component rerendered and thus the Screen which is currently focused to rerender as well
  // const addBlogPost = () => {
  //   setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
  // };

  // since this Provider handles CRUD operations for Blog Posts, a reducer may be used to centralize logic
    // avoids writing multiple named functions and exports
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blog_post' });
  };

  return (
    // blogPosts state variable is passed as data in custom object
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
};

export default BlogContext;
