const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const recipeModels = require('./api/recipe.model');
const mongoUri = 'mongodb://devereld:dd2345@ds015730.mlab.com:15730/recipes-dd';

// make sure this line always appears before any routes
app.use(bodyParser.json());

const recipes = require('./api/recipe.controllers');

app.get('/', function(req, res) {
  res.send('Ahoy there');
});

app.get('/api/recipes', recipes.findAll);
app.get('/api/recipes/:id', recipes.findById);
app.post('/api/recipes', recipes.add);
app.put('/api/recipes/:id', recipes.update);
app.delete('/api/recipes/:id', recipes.delete);
app.delete('/api/killall', recipes.killall);
app.post('/api/import', recipes.import);

mongoose.connect(mongoUri);

app.listen(3001);
console.log('Server running at http://localhost:3001/');