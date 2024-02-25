import React,{useState}from 'react';
import { Typography, Box, Stack } from '@mui/material';
import axios from 'axios';

const Physical = () => {
    const videoUrl1 = "https://www.youtube.com/watch?v=_uZLFUnKSaM";
    const videoUrl2 = "https://www.youtube.com/watch?v=tWjBnQX3if0";
    const videoUrl3 = "https://www.youtube.com/watch?v=jFmCrA6fo78";
    const videoUrl4 = "https://www.youtube.com/watch?v=yDSMdd8hiFg";
    const [output, setOutput] = useState('');
    // Adjust these values to set the desired width and height
    const videoWidth = 500;
    const videoHeight = 250;
    const exerciseTitleStyle = {
        fontSize: '80px',
        textAlign: 'center',
        fontFamily: 'monospace, sans-serif', // Replace 'YourCustomFont' with the actual font name or a generic font family
        height: '100px'
        
    };

    const stackStyle = {
        marginTop: '30px', // Adjust the margin top to move the Stack component lower
    };
    const handleRunPythonFilea = async () => {
        try {
          const response = await axios.post('http://localhost:5000/execute-push-up');
          setOutput(response.data.output);
        } catch (error) {
          console.error('Error running Python file:', error.message);
        }
      };
      const handleRunPythonFileb = async () => {
        try {
          const response = await axios.post('http://localhost:5000/execute-pull-up');
          setOutput(response.data.output);
        } catch (error) {
          console.error('Error running Python file:', error.message);
        }
      };
      const handleRunPythonFilec = async () => {
        try {
          const response = await axios.post('http://localhost:5000/execute-sit-up');
          setOutput(response.data.output);
        } catch (error) {
          console.error('Error running Python file:', error.message);
        }
      };
      const handleRunPythonFiled = async () => {
        try {
          const response = await axios.post('http://localhost:5000/execute-squat');
    
          setOutput(response.data.output);
        } catch (error) {
          console.error('Error running Python file:', error.message);
        }
      };

    return (
        <Box height="100vh" overflowY="auto">
            <div>
                <Typography variant="h3" fontSize="80px" align="center" style={exerciseTitleStyle}>
                    Exercises
                </Typography>
                <Stack direction="row" style={stackStyle}>
                    <Stack direction="row">
                        {/* Adjust the width and height of the video */}
                        {/* <ReactPlayer url={videoUrl1} width={videoWidth} height={videoHeight} /> */}
                        <button onClick={handleRunPythonFilea}><img src="https://i.gifer.com/756z.gif" alt="push-up" /></button>
                    </Stack>
                    <Stack direction="row">
                        {/* Adjust the width and height of the video */}
                        {/* <ReactPlayer url={videoUrl2} width={videoWidth} height={videoHeight} /> */}
                        <button onClick={handleRunPythonFileb}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfelmyCeP0XXsREiWgqwqExsg-dHSLCAhOjQ&usqp=CAU" alt="pull-up"/></button>
                    </Stack>
                </Stack>
                <br />
                <Stack direction="row" style={stackStyle}>
                    <Stack direction="row">
                        {/* Adjust the width and height of the video */}
                        {/* <ReactPlayer url={videoUrl3} width={videoWidth} height={videoHeight} /> */}
                        <button onClick={handleRunPythonFilec}><img src="https://i.pinimg.com/originals/0f/52/d6/0f52d6c8f62e75bace5f4fe3f9480fb0.gif" alt="sit-up"/></button>
                    </Stack>
                    <Stack direction="row">
                        {/* Adjust the width and height of the video */}
                        {/* <ReactPlayer url={videoUrl4} width={videoWidth} height={videoHeight} /> */}
                        <button onClick={handleRunPythonFiled}><img src="https://i.pinimg.com/originals/57/14/00/571400e5903ac63ec76742172ddb121b.gif" alt="squat"/></button>
                    </Stack>
                </Stack>
            </div>
        </Box>
    );
}

export default Physical;

