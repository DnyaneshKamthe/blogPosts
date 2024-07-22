import React from 'react';
import { Card } from 'react-bootstrap';

const BlogPostItem = ({ post, onClick }) => {
  let shortDescription = "NA"
  if(post.description)
    shortDescription = post?.description?.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <Card onClick={() => onClick(post)} style={{ cursor: 'pointer', height: '100%' }} className='bg-light'>
       {post.urlToImage && <img src={post.urlToImage} onError ="vite.svg"alt={post.title}  className= "card-img-top" style = {{height:"200px", width:"auto"}} />}
      <Card.Body>
        <Card.Title className='bg-warning border-secondary rounded p-2'>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-muted">BY {post.author}</Card.Subtitle>
        <Card.Text className='lead'>{shortDescription}</Card.Text>

      </Card.Body>
    </Card>
  );
};

export default BlogPostItem;
