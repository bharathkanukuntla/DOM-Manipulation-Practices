let orderedItemsContainer = document.getElementById("orderedItemsContainer");
let ulContainerid = document.getElementById("ulContainerid");

let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];

function deleteTheOrder(itemId) {
    let listItem = document.getElementById(itemId);
    ulContainerid.removeChild(listItem);
}

function createOrderItems(item) {
    let itemId = "item" + item.uniqueNo;
    let buttonId = "button" + item.uniqueNo;

    let listItem = document.createElement("li");
    listItem.id = itemId;
    ulContainerid.appendChild(listItem);

    let divContainer = document.createElement("div");
    divContainer.classList.add("d-flex", "flex-row");
    listItem.appendChild(divContainer);

    let foodName = document.createElement("p");
    foodName.textContent = item.itemName;
    divContainer.appendChild(foodName);

    let cancelButton = document.createElement("button");
    cancelButton.id = buttonId;
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("btn", "btn-danger");
    divContainer.appendChild(cancelButton);

    cancelButton.onclick = function() {
        deleteTheOrder(itemId);
    };
}

for (let item of itemList) {
    createOrderItems(item);
}