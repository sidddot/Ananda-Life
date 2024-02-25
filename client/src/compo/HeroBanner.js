import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
const imageStyle = {
  width: '500px', // Set your desired width
  height: '400px', // Set your desired height
  opacity: 0.7,
  borderRadius:'50px'
  
     // Set your desired opacity (value between 0 and 1)
};
const HeroBanner = () => {
 return(
    <Box  p="0px" mt="40px">
      <div height="200px" justify="left">
      <Typography color="#b8860b	" fontWeight="600" fontSize="120px" fontFamily="system-ui" fontStyle="initial" >Ananda Life </Typography>
      </div>
    
      <div>
      <Typography fontWeight={700} fontSize="30px" mb="23px" mt="0px">
    Mindful Moments, Radiant Life: <span style={{ color: '#B87333' }}>Ananda Life</span>
</Typography>

</div>

    <Typography fontWeight={700}  mb="23px" mt="0px">
     Your Journey to Holistic Health.
    </Typography>
   
   
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={imageStyle}/> 
  </Box>
 )
}

export default HeroBanner