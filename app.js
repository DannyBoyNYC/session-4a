const express = require('express');
const app = express();

app.use(express.static('app'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(3001);
console.log('Server running at http://localhost:3001/');
