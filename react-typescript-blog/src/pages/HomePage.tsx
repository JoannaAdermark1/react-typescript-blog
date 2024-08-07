import React, { useState, useEffect } from 'react';
import { Container, Typography, InputBase, Pagination } from '@mui/material';
import { styled } from '@mui/system';
import PostList from '../components/PostList';
import { getPosts, Post } from '../services/localStorageService';

const SearchInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
  width: '100%',
}));

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 6;

  useEffect(() => {
    const fetchedPosts = getPosts();
    setPosts(fetchedPosts);
    setFilteredPosts(fetchedPosts);
  }, []);

  useEffect(() => {
    setFilteredPosts(
      posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, posts]);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom>
        Blog Posts
      </Typography>
      <SearchInput placeholder="Search posts..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <PostList posts={paginatedPosts} />
      <Pagination
        count={Math.ceil(filteredPosts.length / POSTS_PER_PAGE)}
        page={currentPage}
        onChange={(e, value) => setCurrentPage(value)}
        sx={{ marginTop: 2 }}
      />
    </Container>
  );
};

export default HomePage;
