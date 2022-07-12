const margaritaHeader = document.querySelector("#margarita-header");
const margaritaDisplay = document.querySelector(".margarita-image");
const margaritaName = document.querySelector("#name");
const glassType = document.querySelector("#glass");
const ingredients = document.querySelector("#ingredients");
const instructions = document.querySelector("#instructions");
const form = document.querySelector("#new-margarita");

fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(response => response.json())
.then(margaritaObject => margaritaObject.drinks.forEach(addImage))

function addImage(margarita) { 
    const margaritaButton = document.createElement("button");
    margaritaButton.innerText = margarita.strDrink;

    margaritaButton.addEventListener("click",  ()=> displayDetails(margarita))
     
    margaritaHeader.append(margaritaButton);
    
}
        
function displayDetails(margarita) {
    margaritaDisplay.src = margarita.strDrinkThumb;
    margaritaName.innerText = margarita.strDrink;
    glassType.innerText = margarita.strGlass;
    ingredients.innerText = margarita.strMeasure1 + " " + margarita.strIngredient1 + ", " + margarita.strMeasure2 + " " + margarita.strIngredient2 + ", " + margarita.strMeasure3 + " " + margarita.strIngredient3 + ", " + margarita.strMeasure4 + " " + margarita.strIngredient4;
    instructions.innerText = margarita.strInstructions;
     
}

form.addEventListener("submit", (e) => {
     e.preventDefault();
     const newName = document.querySelector("#margarita-name").value;
     const newGlass = document.querySelector("#margarita-glass").value;
     const newInstructions = document.querySelector("#new-instructions").value;
     const newImage = document.querySelector("#new-image").value;
      
     let newMargarita = {
          strDrink : newName,
          strGlass : newGlass,
          strInstructions : newInstructions,
          strDrinkThumb : newImage
     };

     addImage(newMargarita);
})
