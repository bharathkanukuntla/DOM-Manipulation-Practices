let checkBoxWithLabelContainer = document.getElementById("checkBoxWithLabelContainer");

let inputEle = document.createElement("input");
inputEle.id = "checkbox";
inputEle.type = "checkbox";
checkBoxWithLabelContainer.appendChild(inputEle);

let labelEle = document.createElement("label");
labelEle.id = "checkboxLabel";
labelEle.htmlFor = "checkbox";
labelEle.textContent = "I am a label";
checkBoxWithLabelContainer.appendChild(labelEle);

function onTodoStatusChange() {
    labelEle.classList.toggle('checked');
}
inputEle.onclick = function() {
    onTodoStatusChange();
}