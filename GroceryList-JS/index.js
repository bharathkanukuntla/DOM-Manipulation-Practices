let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainer = document.getElementById("groceryListContainer");

let mainHeading = document.createElement("h1");
mainHeading.textContent = "Grocery List";
mainHeading.classList.add("mainHeading");
groceryListContainer.appendChild(mainHeading);

let ulContainer = document.createElement("ul");
ulContainer.classList.add("itemsContainer");
groceryListContainer.appendChild(ulContainer);

function createNewItems(item) {
    let newItem = document.createElement("li");
    newItem.textContent = item;
    ulContainer.appendChild(newItem);
}

for (let item of groceryList) {
    createNewItems(item);
}