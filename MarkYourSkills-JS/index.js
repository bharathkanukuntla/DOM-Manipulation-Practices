let skillsContainer = document.getElementById("skillsContainer");
let ulContainer = document.getElementById("ulContainer");

let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

function onTodoStatusCheck(checkboxId, labelId) {


    let labelEle = document.getElementById(labelId);

    labelEle.classList.toggle('styles');
}

function creatingItems(item) {
    let checkboxId = "checkbox" + item.uniqueNo;
    let labelId = "label" + item.uniqueNo;

    let liElement = document.createElement("li");
    ulContainer.appendChild(liElement);

    let divContainer = document.createElement("div");
    divContainer.classList.add("d-flex", "flex-row");
    liElement.appendChild(divContainer);

    let inputEle = document.createElement("input");
    inputEle.id = checkboxId;
    inputEle.type = "checkbox";
    divContainer.appendChild(inputEle);

    let labelEle = document.createElement("label");
    labelEle.textContent = item.skillName;
    labelEle.htmlFor = checkboxId;
    labelEle.id = labelId;
    divContainer.appendChild(labelEle);

    inputEle.onclick = function() {
        onTodoStatusCheck(checkboxId, labelId);
    };
}

for (let item of skillList) {
    creatingItems(item);
}