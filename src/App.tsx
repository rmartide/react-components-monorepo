import React from 'react';
import { FormInput } from './components';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            React Components Monorepo
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h5" color="inherit">
          Classic Input with Label
          </Typography>
        <FormInput label="Label:"></FormInput>
      </Container>
    </>
  );
}

export default App;
