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

    //if value of key value.length = 0, dont show 

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
     const newIngredients = document.querySelector('#new-ingredients').value;
     const newInstructions = document.querySelector("#new-instructions").value;
     const newImage = document.querySelector("#new-image").value;
      
    function addNewCocktail() { 
        const newCocktailButton = document.createElement("button");
        newCocktailButton.innerText = newName;
    
        newCocktailButton.addEventListener("click",  ()=> {
            cocktailDisplay.src = newImage;
            cocktailName.innerText = newName;
            glassType.innerText = `Glass: ${newGlass}`;
            ingredients.innerText = `Ingredients: ${newIngredients}`;
            instructions.innerText = `How to Make: ${newInstructions}`;
        });
         
        cocktailHeader.append(newCocktailButton);
        
    };

    addNewCocktail();
    form.reset();
});