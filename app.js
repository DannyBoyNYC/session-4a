const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// make sure this line always appears before any routes
app.use(bodyParser.json());

const routes = require('./src/recipe.routes');

app.get('/', function(req, res) {
  res.send('Ahoy there');
});

app.get('/api/recipes', recipes.findAll);
app.get('/api/recipes/:id', recipes.findById);
app.post('/api/recipes', recipes.add);
app.put('/api/recipes/:id', recipes.update);
app.delete('/api/recipes/:id', recipes.delete);

app.listen(3001);
console.log('Server running at http://localhost:3001/');