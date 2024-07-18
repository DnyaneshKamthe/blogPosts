import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const BlogPostDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { post } = state || {};

  if (!post) {
    // loading for no data
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Button onClick={() => navigate('/')}>Back</Button>
      <h1>{post.title}</h1>
      {post.urlToImage && <img src={post.urlToImage} alt={post.title} style={{ width: '100%' }} />}
      <p>{post.author ? `By ${post.author}` : 'Unknown Author'}</p>
      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
      <p>{post.description}</p>
    </Container>
  );
};

export default BlogPostDetails;
