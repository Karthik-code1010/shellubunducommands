const express = require('express')
const bodyParser = require('body-parser')
const { exec } = require('child_process');
const { execFile } = require('child_process');
const { spawn } = require('child_process');

const PORT = 3100

const app = express()
//const api = require('./routes/api')
var result = exec('pwd', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
exec('sh somefile.sh', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  
// var filesh = execFile('./somefile.sh', (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });

app.use(bodyParser.json())
// app.use('/api',api)

app.get('/', function(req, res){
    res.send(result);
})

app.listen(PORT, function(){
    console.log('Server  running on localhost:'+ PORT)
})