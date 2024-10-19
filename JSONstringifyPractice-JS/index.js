let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let jsonContainer = document.getElementById("jsonContainer");



function addingTheJson(item) {
    let pContainer = document.createElement("div");
    pContainer.classList.add("pContainer");
    pContainer.textContent = item;
    jsonContainer.appendChild(pContainer);
}

let toBeConvertedToJSON = [bikes, person, todos];

for (let item of toBeConvertedToJSON) {
    let converted = JSON.stringify(item);
    addingTheJson(converted);
}