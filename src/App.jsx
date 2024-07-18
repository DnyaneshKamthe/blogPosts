import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import { PostsProvider } from './components/context/PostsContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <PostsProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<BlogPostList />} />
            <Route path="/post/:id" element={<BlogPostDetails />} />
          </Routes>
        </div>
      </Router>
    </PostsProvider>
  );
};

export default App;
