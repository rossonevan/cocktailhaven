const margaritaHeader = document.querySelector("#margarita-header");
const margaritaDisplay = document.querySelector(".margarita-image");
const margaritaName = document.querySelector("#name");
const glassType = document.querySelector("#glass");
const instructions = document.querySelector("#instructions");
const form = document.querySelector("#new-margarita");

fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(response => response.json())
.then(margaritaObject => margaritaObject.drinks.forEach(addImage))

function addImage(margarita) { 
    const margaritaImage = document.createElement("img");
    margaritaImage.src = margarita.strDrinkThumb;

    margaritaImage.addEventListener("click",  ()=> displayDetails(margarita))
     
    margaritaHeader.append(margaritaImage);
    
}
        
function displayDetails(margarita) {
    margaritaDisplay.src = margarita.strDrinkThumb;
    margaritaName.innerText = margarita.strDrink;
    glassType.innerText = margarita.strGlass;
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

    



    


// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";
// document.querySelector("body").appendChild(h2);