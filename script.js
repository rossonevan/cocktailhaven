fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(response => response.json())
.then(margaritaObject => { margaritaObject.drinks.strDrinksThumb.forEach(
    addImage(image)
)
function addImage(image) {
    
}

    
    
})

// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";
// document.querySelector("body").appendChild(h2);