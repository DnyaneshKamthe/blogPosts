import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=8a5e11189f07475da24084b2123e40f2`
        );
        setPosts(response.data.articles);
        setTotalResults(response.data.totalResults);
        console.log(response.data.articles);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchPosts();
  }, [page]);

  return (
    <PostsContext.Provider value={{ posts, totalResults, page, setPage }}>
      {children}
    </PostsContext.Provider>
  );
};
