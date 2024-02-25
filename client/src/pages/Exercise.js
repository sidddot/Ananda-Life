import React, { useEffect } from 'react';

const Exercise = () => {
  useEffect(() => {
    // Redirect to the desired website
    window.location.href = 'https://darebee.com/'; // Replace with the URL you want to redirect to
  }); // Empty dependency array ensures this effect runs once after the initial render

  // Optional: You can render some content while the redirection happens
  return (
    <div>
      
    </div>
  );
};

export default Exercise;
