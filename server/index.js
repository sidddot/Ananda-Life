// const {spawn}=require('child_process');

// const child_python= spawn('python',['push_up.py']);

// child_python.stdout.on('data',(data)=>{
//     console.log('stdout: '+data);
// })

// child_python.stderr.on('data',(data)=>{
//     console.error('${data}');
// })
// child_python.on('close',(code)=>{
//     console.log('child process has run successfully');
// })

const express = require('express');
const {spawn}=require('child_process');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/execute-push-up', (req, res) => {
  const filePath = 'push_up.py';// Set the actual file path here
  // Read the contents of the Python file
  fs.readFile(filePath, 'utf8', (err, pythonCode) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading Python file.' });
    }
    const exec= spawn('python',['push_up.py']);
    exec.stdout.on('data',(data)=>{
             console.log('stdout: '+data);
         })
  });
});

app.post('/execute-pull-up', (req, res) => {
  const filePath = 'pull_up.py';// Set the actual file path here
  // Read the contents of the Python file
  fs.readFile(filePath, 'utf8', (err, pythonCode) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading Python file.' });
    }
    const exec= spawn('python',['pull_up.py']);
    exec.stdout.on('data',(data)=>{
             console.log('stdout: '+data);
         })
  });
});
app.post('/execute-sit-up', (req, res) => {
  const filePath = 'sit_up.py';// Set the actual file path here
  // Read the contents of the Python file
  fs.readFile(filePath, 'utf8', (err, pythonCode) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading Python file.' });
    }
    const exec= spawn('python',['sit_up.py']);
    exec.stdout.on('data',(data)=>{
             console.log('stdout: '+data);
         })
  });
});
app.post('/execute-squat', (req, res) => {
  const filePath = 'squat.py';// Set the actual file path here
  // Read the contents of the Python file
  fs.readFile(filePath, 'utf8', (err, pythonCode) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading Python file.' });
    }
    const exec= spawn('python',['squat.py']);
    exec.stdout.on('data',(data)=>{
             console.log('stdout: '+data);
         })
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
