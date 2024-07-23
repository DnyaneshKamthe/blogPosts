import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import { PostsProvider } from './components/context/PostsContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <PostsProvider>
      <Router>
        <div className="App">
          <Routes basename={`/blogPosts/`}>
            <Route path="/" element={<BlogPostList />} />
            <Route path="/post/:id" element={<BlogPostDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </PostsProvider>
  );
};

export default App;
