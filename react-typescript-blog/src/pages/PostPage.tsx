import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import { getPostById, deletePost, Post } from '../services/localStorageService';

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const post: Post | undefined = getPostById(id);

  if (!post) {
    return <Typography variant="h4">Post not found</Typography>;
  }

  const handleDelete = () => {
    deletePost(id);
    history.push('/');
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        {post.title}
      </Typography>
      <img src={post.imageUrl || 'defaultImage.jpg'} alt={post.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <Typography variant="body1" gutterBottom>
        {post.content}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => history.push(`/edit/${id}`)} style={{ marginRight: '10px' }}>
        Edit
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete
      </Button>
    </Container>
  );
};

export default PostPage;
