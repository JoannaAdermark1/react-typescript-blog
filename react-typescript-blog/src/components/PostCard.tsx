import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Post } from '../services/localStorageService';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={post.imageUrl || 'defaultImage.jpg'} alt={post.title} />
      <CardContent>
        <Typography variant="h5" component="div">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content.substring(0, 100)}...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
