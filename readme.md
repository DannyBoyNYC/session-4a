# IV - Server Side with ExpressJS

## Homework Solution

Note - I haven't included the form to add a recipe in this, just the first part - the DOM manipulation. For the form, review the notes from session 3. Be sure to include `app.use(bodyParser.urlencoded({ extended: true }));` in app.js. Read up on it here: https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90

Notice the images in `/app/img/`. 

If you are using a separate `script.js` file for `index.html` you will need to add this to the `app.js` file:

`app.use(express.static('app'));`

For development purposes, I don't want to click the button everytime I need to see my content so I'll start by just calling the function at the bottom of `scripts.js`:

```js
getEm();
```

Start by adding the ingredients:

```js
<li>
  <h2>${recipe.title}</h2>
  <p>${recipe.ingredients}</p>
</li>
```

Take a look at one of the preparation steps:

```js
recipe => `
  <li>
    <h2>${recipe.title}</h2>
    <p>${recipe.ingredients}</p>
    <p>${
      recipe.preparation[0].step
    }</p>
  </li>
  `
```

Display the preparation steps;

```js
function getEm() {

  fetchRecipes('http://localhost:3001/api/recipes', (recipes) => {
    console.log(recipes)
    const markup = `
      <ul class="recipes">
        ${recipes.map(
      recipe => `
        <li>
          <h2>${recipe.title}</h2>
          <p>${recipe.ingredients}</p>

          <h3>Steps</h3>
          <ul class="ingredient">
          ${ recipe.preparation.map(
            (prep) => `<li>${(prep.step)}</li>`
          ).join('')
          }
          </ul>

        </li>
        `
        ).join('')}
      </ul>
    `
    elem.innerHTML = markup;
  })
}

getEm();
```

Add the ingredients and description:

```js
function getEm() {

  fetchRecipes('http://localhost:3001/api/recipes', (recipes) => {
    console.log(recipes)
    const markup = `
      <ul class="recipes">
        ${recipes.map(
      recipe => `
        <li>
          <h2>${recipe.title}</h2>
          <p>${recipe.description}</p>
          <img src="img/${recipe.image}" />

          <h3>Ingredients</h3>
          <ul class="ingredient">${
            recipe.ingredients.map(
              (ingredient) => `<li>${ingredient}</li>`
            ).join('')
            }
          </ul>

          <h3>Steps</h3>
          <ul class="ingredient">
          ${ recipe.preparation.map(
            (prep) => `<li>${(prep.step)}</li>`
          ).join('')
          }
          </ul>

        </li>
        `
        ).join('')}
      </ul>
    `
    elem.innerHTML = markup;
  })
}

getEm();
```

Prevent the default click behavior:

```js
function getEm(e) {
  e.preventDefault();
```

and remove the call added earlier:

```js
// getEm();
```

Add images to the final script:


```js
function getEm(e) {
  e.preventDefault();
  fetchRecipes('http://localhost:3001/api/recipes', (recipes) => {
    console.log(recipes)
    const markup = `
      <ul class="recipes">
        ${recipes.map(
      recipe => `
        <li>
          <h2>${recipe.title}</h2>
          <p>${recipe.description}</p>
          <img src="img/${recipe.image}" />
          <h3>Ingredients</h3>
          <ul class="ingredient">${
            recipe.ingredients.map(
              (ingredient) => `<li>${ingredient}</li>`
            ).join('')
            }
          </ul>

          <h3>Steps</h3>
          <ul class="ingredient">
          ${ recipe.preparation.map(
            (prep) => `<li>${(prep.step)}</li>`
          ).join('')
          }
          </ul>
          
        </li>
        `
        ).join('')}
      </ul>
    `
    elem.innerHTML = markup;
  })
}
```

Add a touch of css

```css
ul.recipes {
  margin: 0;
  padding: 0;
  list-style: none;
}

ul.recipes > li h2 {
  border-top: 3px solid #999;
}

img {
  width: 100%;
}
```

See the script.js file in the `app` folder for the full script.

Download this branch and cd into the folder. 

Type `npm i` in the terminal to install the dependencies.

Type `npm start` to kick off the application.

Visit `localhost:3001` in the browser.
