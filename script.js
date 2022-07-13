const cocktailHeader = document.querySelector("#cocktail-header");
const cocktailDisplay = document.querySelector(".cocktail-image");
const cocktailName = document.querySelector("#name");
const glassType = document.querySelector("#glass");
const ingredients = document.querySelector("#ingredients");
const instructions = document.querySelector("#instructions");
const form = document.querySelector("#new-cocktail");


fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(object => object.drinks.forEach(addCocktail))

fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(object => object.drinks.forEach(addCocktail))

fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(object => object.drinks.forEach(addCocktail))

fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(object => object.drinks.forEach(addCocktail))

fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(object => object.drinks.forEach(addCocktail))

fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(object => object.drinks.forEach(addCocktail))

function addCocktail(cocktail) { 
    const cocktailButton = document.createElement("button");
    cocktailButton.innerText = cocktail.strDrink;

    cocktailButton.addEventListener("click",  ()=> displayDetails(cocktail))
     
    cocktailHeader.append(cocktailButton);
    
};
        
function displayDetails(cocktail) {
    cocktailDisplay.src = cocktail.strDrinkThumb;
    cocktailName.innerText = cocktail.strDrink;
    glassType.innerText = `Glass: ${cocktail.strGlass}`;
    
    let arrMeasurement =[`${cocktail.strMeasure1}`, `${cocktail.strMeasure2}`, `${cocktail.strMeasure3}`, `${cocktail.strMeasure4}`, 
    `${cocktail.strMeasure5}`, `${cocktail.strMeasure6}`, `${cocktail.strMeasure7}`, `${cocktail.strMeasure8}`];
    
    let arrIngredients = [`${cocktail.strIngredient1}`, `${cocktail.strIngredient2}`, `${cocktail.strIngredient3}`, `${cocktail.strIngredient4}`, 
    `${cocktail.strIngredient5}`, `${cocktail.strIngredient6}`, `${cocktail.strIngredient7}`, `${cocktail.strIngredient8}`];
    
    const filteredMeasurement = [];
    const filteredIngredients = [];
    arrMeasurement.forEach((e) => {
        if (e !== 'null') {
            filteredMeasurement.push(e);
        };
    });
    arrIngredients.forEach((e) => {
        if (e !== 'null') {
            filteredIngredients.push(e);
        };
    });

    const filtered = filteredMeasurement.map((e, i) => ' ' + e + ' ' + filteredIngredients[i]);

    ingredients.innerText = `Ingredients: ${filtered}`;
    
    instructions.innerText = `How to Make: ${cocktail.strInstructions}`;
};

form.addEventListener("focusin", (e) => {
    e.target.style.background = 'lightblue';
});

form.addEventListener("focusout", (e) => {
    e.target.style.background = '';
});

form.addEventListener("submit", (e) => {
     e.preventDefault();
     const newName = document.querySelector("#new-name").value;
     const newGlass = document.querySelector("#new-glass").value;
     const newInstructions = document.querySelector("#new-instructions").value;
     const newImage = document.querySelector("#new-image").value;
      
     let newCocktail = {
          strDrink : newName,
          strGlass : newGlass,
          strInstructions : newInstructions,
          strDrinkThumb : newImage,
          strMeasure1 : 'null',
          strIngredient1 : 'null',
          strMeasure2 : 'null',
          strIngredient2 : 'null',
          strMeasure3 : 'null',
          strIngredient3 : 'null',
          strMeasure4 : 'null',
          strIngredient4 : 'null',
          strMeasure5 : 'null',
          strIngredient5 : 'null',
          strMeasure6 : 'null',
          strIngredient6 : 'null',
          strMeasure7 : 'null',
          strIngredient7 : 'null',
          strMeasure8 : 'null',
          strIngredient8 : 'null'
     };

    addCocktail(newCocktail);
    // removeIngredients(newCocktail);
    form.reset();
});

// function removeIngredients() {
//     ingredients.remove();
// }