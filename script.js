const margaritaHeader = document.getElementById("margarita-header")
 const margaritaDisplay = document.querySelector(".margarita-image")
 console.log(margaritaDisplay)


fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(response => response.json())
.then(margaritaObject => margaritaObject.drinks.forEach(addImage))

function addImage(margarita) { 
    const margaritaImage = document.createElement("img")
    margaritaImage.src = margarita.strDrinkThumb


   margaritaImage.addEventListener("click", function () {
        displayDetails(margarita)
        
   })
        
        
   margaritaHeader.append(margaritaImage)
    
 }
        
function displayDetails(margarita) {
    margaritaDisplay.src = margarita.strDrinkThumb

     }
    


    


// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";
// document.querySelector("body").appendChild(h2);