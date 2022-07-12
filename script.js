const cocktailHeader = document.querySelector("#cocktail-header");
const cocktailDisplay = document.querySelector(".cocktail-image");
const cocktailName = document.querySelector("#name");
const glassType = document.querySelector("#glass");
const ingredients = document.querySelector("#ingredients");
const instructions = document.querySelector("#instructions");
const form = document.querySelector("#new-cocktail");


fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(object => object.drinks.forEach(addImage))

fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(object => object.drinks.forEach(addImage))

fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(object => object.drinks.forEach(addImage))

fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(object => object.drinks.forEach(addImage))

fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(object => object.drinks.forEach(addImage))

fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response => response.json())
.then(object => object.drinks.forEach(addImage))

function addImage(cocktail) { 
    const cocktailButton = document.createElement("button");
    cocktailButton.innerText = cocktail.strDrink;

    cocktailButton.addEventListener("click",  ()=> displayDetails(cocktail))
     
    cocktailHeader.append(cocktailButton);
    
};
        
function displayDetails(cocktail) {
    cocktailDisplay.src = cocktail.strDrinkThumb;
    cocktailName.innerText = cocktail.strDrink;
    glassType.innerText = `Glass: ${cocktail.strGlass}`;
    ingredients.innerText = `Ingredients: ${cocktail.strMeasure1} ${cocktail.strIngredient1}, ${cocktail.strMeasure2} ${cocktail.strIngredient2}, ${cocktail.strMeasure3} ${cocktail.strIngredient3}, ${cocktail.strMeasure4} ${cocktail.strIngredient4}`;
    instructions.innerText = `Instructions: ${cocktail.strInstructions}`;
     
};

form.addEventListener("focusin", (e) => {
    e.target.style.background = 'lightblue';
});

form.addEventListener("focusout", (e) => {
    e.target.style.background = '';
});

form.addEventListener("submit", (e) => {
     e.preventDefault();
     const newName = document.querySelector("#cocktail-name").value;
     const newGlass = document.querySelector("#cocktail-glass").value;
     const newInstructions = document.querySelector("#new-instructions").value;
     const newImage = document.querySelector("#new-image").value;
      
     let newCocktail = {
          strDrink : newName,
          strGlass : newGlass,
          strInstructions : newInstructions,
          strDrinkThumb : newImage
     };

     addImage(newCocktail);

     form.reset();
});
