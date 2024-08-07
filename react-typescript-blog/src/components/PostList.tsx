import React from 'react';
import { Grid } from '@mui/material';
import PostCard from './PostCard';
import { Post } from '../services/localStorageService';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <Grid container spacing={4}>
      {posts.map(post => (
        <Grid item key={post.id} xs={12} sm={6} md={4}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
