const margaritaHeader = document.getElementById("margarita-header")
fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(response => response.json())
.then(margaritaObject => margaritaObject.drinks.forEach(addImage))

function addImage(margarita) { 
    const margaritaImage = document.createElement("img")
    margaritaImage.src = margarita.strDrinkThumb

    margaritaImage.addEventListener("click", function () {
        console.log("you clicked me")
    })
    
    margaritaHeader.append(margaritaImage)


    
}

// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";
// document.querySelector("body").appendChild(h2);