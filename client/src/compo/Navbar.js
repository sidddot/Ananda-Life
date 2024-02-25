import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import '../App.css'
import logo from '../assets/images/logo.png';

const Navbar = () => (
  <Stack direction="row"  marginTop="20px"  px="20px" justifyContent="left" >
    <Stack  direction="row"   px="20px" justifyContent="flex-start">
    <Link to="/">
      <img src={logo} alt="logo" style={{ width: '150px', height: '48px', margin: '0px -50px'}} />
    </Link>
    </Stack>
    
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      justifyContent="center" // Adjusted to 'center'av
      alignItems="center" // Added for vertical centering
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #b8860b', marginLeft:'750px' }}>Home</Link>

      <Link to ="/exercise" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #b8860b'}}>Exercises</Link>
    </Stack>
  </Stack>
);

export default Navbar;