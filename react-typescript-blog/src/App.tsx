import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import CreateEditPage from './pages/CreateEditPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/create" element={<CreateEditPage />} />
      <Route path="/edit/:id" element={<CreateEditPage />} />
    </Routes>
  );
};

export default App;
