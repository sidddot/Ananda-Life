import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import mental from '../assets/icons/mental.png';
import { Button, Stack } from '@mui/material';
import physical from '../assets/icons/physical.png';
import nutri from '../assets/icons/nutri.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HeroBanner from '../compo/HeroBanner'
import LoginPage from '../compo/LoginPage';


const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const location = useLocation();
  const { state } = location;
  const username = state && state.username;
  const u_n=username;
  console.log("*Home"+username +"");

  useEffect(() => {
    console.log(location.pathname); // log the current pathname
  }, [location]);

  const routeChange = (path) => {
    navigate(path);
  };

  
  return (
    <Box height="100vh" overflowY="auto">
      <HeroBanner/>
      <div>
        <Stack direction="row">
          <Stack>
            <img
              src={mental}
              alt="mental"
              style={{ width: '150px', height: '190px', margin: '0px 0px', position: 'center', bottom: '300px', marginLeft: '130px', top: '300px' }}
            />

              <Link to="http://127.0.0.1:5500/client/src/mental/mhealth-main/index.html">
                <Typography variant="h6" style={{ position: 'absolute', bottom: '0', marginLeft: '130px', color: '#641807', top: '850px' }}>
                  Mental Wellness
                </Typography>
              </Link>
          </Stack>
          <Stack direction="row">
            <Link to="/physical">
              <img
                src={physical}
                alt="physical"
                style={{ width: '150px', height: '130px', margin: '0px 0px', position: 'center', bottom: '100px', marginLeft: '180px' }}
              />
            </Link>
            <Typography variant="h6" style={{ position: 'absolute', bottom: '0', marginLeft: '180px', color: '#641807', top: '850px' }}>Physical Wellness</Typography>
          </Stack>
          <Stack direction="row">
            
          <Link to={`/nutri/${username}`}>
            <img  
              src={nutri}
              alt="nutri"
              style={{ width: '200px', height: '160px', margin: '0px 0px', position: 'center', bottom: '100px', marginLeft: '180px' }}
            />
          </Link>


            <Typography variant="h6" style={{ position: 'absolute', bottom: '0', marginLeft: '240px', color: '#641807', top: '850px' }}>Nutrition</Typography>
          </Stack>
        </Stack>

      </div>
    </Box>
  );
};

export default Home;