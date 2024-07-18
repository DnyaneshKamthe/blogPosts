import React, { useContext, useState, useEffect } from 'react';
import BlogPostItem from './BlogPostItem';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PostsContext } from './context/PostsContext';


const BlogPostList = () => {
  const { posts, loading, page, setPage } = useContext(PostsContext);
  const navigate = useNavigate();
  const postsPerPage = 20;
  const [renderedPosts, setRenderedPosts] = useState([]);

  useEffect(() => {
    if (!loading) {
      setRenderedPosts(posts.slice(0, page * postsPerPage));
    }
  }, [loading, posts, page]);

  const handlePostClick = (post) => {
    navigate(`/post/${encodeURIComponent(post.url)}`, { state: { post } });
  };

  const loadMorePosts = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <h1>Blog Posts</h1>
      <Row className="d-flex">
        {renderedPosts.map((post, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="d-flex align-items-stretch">
            <BlogPostItem post={post} onClick={handlePostClick} />
          </Col>
        ))}
      </Row>
      {!loading && renderedPosts.length < posts.length && (
        <div className="d-flex justify-content-center my-3">
          <Button onClick={loadMorePosts}>Load More</Button>
        </div>
      )}
      {loading && <div>Loading...</div>}
    </Container>
  );
};

export default BlogPostList;
