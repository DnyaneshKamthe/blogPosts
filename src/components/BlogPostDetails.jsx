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
      <Button className='btn btn-secondary btn-lg' onClick={() => navigate('/')}>Back</Button>
      <h1>{post.title}</h1>
      {post.urlToImage && <img src={post.urlToImage} alt={post.title}  style = {{height:"400px", width:"auto"}} />}
      <div className='text-muted'>
        <span>{post.author ? `By ${post.author}` : 'Unknown Author'}</span>
        <h6>{new Date(post.publishedAt).toLocaleDateString()}</h6>
      </div>
      <p className='text-dark display-5'>{post.content}</p>
      <p>{post.description}</p>
    </Container>
  );
};

export default BlogPostDetails;
