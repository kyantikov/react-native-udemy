import React, { useState } from 'react';

const BlogContext = React.createContext();


export const BlogProvider = ({ children }) => {

  const [blogs, setBlogs] = useState([
    {
      id: '1',
      title: '****** TEST ******',
      content: 'TEST CONTENT - LEEDLE LEEDLE - LOLOLOLOLOLOL',
    }
  ]);

  const addBlogPost = (title, content) => {
    setBlogs(state => {
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999).toString(),
          title,
          content
        }
      ];
    });
  };

  const editBlogPost = (id, title, content) => {
    blogs.map(blogPost => {
      return (blogPost.id === id) ? { title, content } : blogPost;
    });
  };

  const deleteBlogPost = (id) => {
    return blogs.filter(blogPost => blogPost.id !== id);
  };

  return (
    <BlogContext.Provider value={{ state: blogs, addBlogPost, editBlogPost, deleteBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
