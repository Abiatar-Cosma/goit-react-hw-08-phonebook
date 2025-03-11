import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Phonebook
        </Typography>
        {!isLoggedIn ? (
          <>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </>
        ) : (
          <UserMenu />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;