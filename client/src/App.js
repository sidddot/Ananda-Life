import React from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom'; // Import Navigate
import { Box, Button } from '@mui/material';

import './App.css';

import Home from './pages/Home';
import Navbar from './compo/Navbar';
import LoginPage from './compo/LoginPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import RegisterPage from './compo/RegisterPage';
import Physical from './pages/Physical';
import Exercise from './pages/Exercise';
import NutriApp from './NutriApp';

const App = () => (
  <Box width="1245px">
    <div style={{height:"100px"}}><h2>     </h2></div>
    <Navbar/>
    <Box textAlign="right" mt={-5}>
      <Link to="/login">
        <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
          Sign In
        </Button>
      </Link>
    </Box>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise" element={<Exercise />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/physical" element={<Physical />} />
      <Route path="/nutri/:username" element={<NutriApp />} />
      <Route path="*" element={<Navigate to="/" />} /> 
    </Routes>
  </Box> 
);

export default App;
