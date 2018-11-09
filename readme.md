# IV - Server Side with ExpressJS

## Homework Solution

Separate script file:

`app.use(express.static('app'));`

Pevent the default:

```js
function getEm(e) {
  e.preventDefault();
```

```js
<li>
  <h2>${recipe.title}</h2>
  <p>${recipe.ingredients}</p>
</li>
```

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

```js
function getEm(e) {
  // e.preventDefault();
  fetchRecipes('http://localhost:3001/api/recipes', (recipes) => {
    console.log(recipes)
    const markup = `
      <ul>
        ${recipes.map(
      recipe => `
        <li>
          <h2>${recipe.title}</h2>
          <p>${
            recipe.ingredients.map(
              (ingredient) => `<ul>${ingredient}</ul>`
            ).join(', blah')
            }</p>
          <h3>Steps</h3>
          ${ recipe.preparation.map(
            (prep) => `<p>${(prep.step)}</p>`
          ).join('')
          }
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


```js
function getEm(e) {
  // e.preventDefault();
  fetchRecipes('http://localhost:3001/api/recipes', (recipes) => {
    console.log(recipes)
    const markup = `
      <ul class="recipes">
        ${recipes.map(
      recipe => `
        <li>
          <h2>${recipe.title}</h2>
          <p>${recipe.description}</p>
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
