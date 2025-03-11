import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearToken } from '../../redux/Slices/authSlice';
import { Button, Typography, Box } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(clearToken());
    localStorage.removeItem('token');
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography variant="body1">{user?.email}</Typography> {/* Afișăm e-mailul */}
      <Button variant="contained" color="error" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;