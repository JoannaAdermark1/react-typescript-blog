import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import CreateEditPage from './pages/CreateEditPage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/post/:id" component={PostPage} />
          <Route path={['/create', '/edit/:id']} component={CreateEditPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
