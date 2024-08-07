import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>My Blog</Link>
        </Typography>
        <Button color="inherit" component={Link} to="/create">New Post</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
