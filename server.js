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
exec('sh somefile.sh karthik innoart', (error, stdout, stderr) => {
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

//exec file method

const child = execFile('node', ['filedemo.js'], 
        (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});


//fork method 
var cp = require('child_process');
  
var childp = cp.fork(__dirname + '/sub.js');
  
childp.on('message', function(m) {
  console.log('Parent process received:', m);
});
  
childp.send({ hello: 'from parent process' });
  
childp.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

///nodejs-shell-commands
//const { spawn } = require('child_process');
const childs = spawn('ls', ['/nodejs-shell-commands'], {shell: true});
childs.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
  
childs.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
  
childs.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

app.use(bodyParser.json())
// app.use('/api',api)

app.get('/', function(req, res){
    res.send(result);
})

app.post('/shcmd', function(req, res){
  console.log(req.body.cmd);
  var cmdsh = req.body.cmd;
  exec(cmdsh, (error, stdout, stderr) => {
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
  
  res.status(200).send('success')


})
app.post('/shparam', function(req, res){
  console.log(req.body.name);
  console.log(req.body.cname);
  var name = req.body.name;
  var cname = req.body.cname;

  exec(`sh somefile.sh ${name} ${cname}`, (error, stdout, stderr) => {
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
  
  res.status(200).send('success')


})

app.listen(PORT, function(){
    console.log('Server  running on localhost:'+ PORT)
})