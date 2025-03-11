import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setToken } from '../../redux/Slices/authSlice';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      console.error('All fields are required!');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      console.error('Invalid email format!');
      return;
    }

    if (password.length < 8) {
      console.error('Password must be at least 8 characters long!');
      return;
    }

    try {
      const response = await axios.post('https://connections-api.goit.global/users/signup', {
        name,
        email,
        password
      });

      dispatch(setToken({ token: response.data.token, user: { email } }));
      localStorage.setItem('token', response.data.token);
      navigate('/contacts');
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
          <TextField
            fullWidth
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
