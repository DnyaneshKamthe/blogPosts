import React from 'react';
import { Card } from 'react-bootstrap';

const BlogPostItem = ({ post, onClick }) => {
  const shortDescription = post?.description?.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <Card onClick={() => onClick(post)} style={{ cursor: 'pointer', height: '100%' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">By {post.author}</Card.Subtitle>
        <Card.Text>{shortDescription}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogPostItem;
