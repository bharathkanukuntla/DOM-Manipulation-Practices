let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let headingEle = document.getElementById("headingEle");
headingEle.textContent = recipeObj.title;

let imageEle = document.getElementById("imageEle");
imageEle.src = recipeObj.imgSrc;
imageEle.classList.add("image");

let unListContainer = document.getElementById("unListContainer");

function addIngredients(item) {
    let listEle = document.createElement("li");
    listEle.setAttribute("class", "listEleStyling");
    listEle.textContent = item;
    unListContainer.appendChild(listEle);
}

for (let item of recipeObj.ingredients) {
    addIngredients(item);
}