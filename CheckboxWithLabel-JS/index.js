let checkboxWithLabelContainer = document.getElementById("checkboxWithLabelContainer");
checkboxWithLabelContainer.classList.add("checkboxWithLabelContainerClass");

let inputEle = document.createElement("input");
inputEle.type = "checkbox";
inputEle.id = "checkbox";
checkboxWithLabelContainer.appendChild(inputEle);

let labelEle = document.createElement("label");
labelEle.textContent = "Click Me!";
labelEle.htmlFor = "checkbox";
labelEle.id = "checkboxLabel";
checkboxWithLabelContainer.appendChild(labelEle);