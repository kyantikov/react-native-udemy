// import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blog_post':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999).toString(),
          title: action.payload.title,
          content: action.payload.content,
        }
      ];
    case 'edit_blog_post':
      return state.map(blogPost => {
        return (blogPost.id === action.payload.id) ? action.payload : blogPost;
      });
    case 'delete_blog_post':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, navigateAction) => {
    dispatch({ type: 'add_blog_post', payload: { title, content } });
    if (navigateAction) {
      navigateAction();
    }
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, navigateAction) => {
    dispatch({type: 'edit_blog_post', payload: { id, title, content }});
    if (navigateAction) {
      navigateAction();
    }
  }
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blog_post', payload: id })
  }
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [
    {
      id: '1',
      title: '****** TEST ******',
      content: 'TEST CONTENT - LEEDLE LEEDLE - LOLOLOLOLOLOL',
    }
  ]
);


// const BlogContext = React.createContext();

// using 'children' prop provides the BlogContext with any child components that it contains
  // in this case, we are providing <App /> ... (see in App.js)
  // that means that any screen inside of the stack navigator will be provided with the BlogContext API that we created

// export const BlogProvider = ({ children }) => {

  // by creating a state variable inside of the BlogProvider, any Screen + its children will receive this state variable
  // const [blogPosts, setBlogPosts] = useState([]);

  // addBlogPost controls when this component rerendered and thus the Screen which is currently focused to rerender as well
  // const addBlogPost = () => {
  //   setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
  // };

  // since this Provider handles CRUD operations for Blog Posts, a reducer may be used to centralize logic
    // avoids writing multiple named functions and exports
  // const [blogPosts, dispatch] = useReducer(blogReducer, []);


  // return (
    // blogPosts state variable is passed as data in custom object
    // <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
    //   {children}
    // </BlogContext.Provider>
  // )
// };

