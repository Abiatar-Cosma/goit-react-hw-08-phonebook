import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Contacts from './components/Contacts/Contacts';
import Navigation from './components/Navigation/Navigation';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
