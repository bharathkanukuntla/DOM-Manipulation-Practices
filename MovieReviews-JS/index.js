let movieReviewsContainer = document.getElementById("movieReviewsContainer");
let titleInput = document.getElementById("titleInput");
let reviewTextareaInput = document.getElementById("reviewTextarea");
let addBtn = document.getElementById("addBtn");

let divContainer = document.createElement("div");
divContainer.id = "reviewsContainer";
movieReviewsContainer.appendChild(divContainer);

let titlePara = document.createElement("p");
titlePara.classList.add("titlePara");
divContainer.appendChild(titlePara);

let reviewPara = document.createElement("p");
divContainer.appendChild(reviewPara);

addBtn.onclick = function() {
    let titleInputText = titleInput.value;
    let reviewInputText = reviewTextareaInput.value;

    titlePara.textContent = "Movie Title: " + titleInputText;
    reviewPara.textContent = "Review: " + reviewInputText;

    titleInput.value = "";
    reviewTextareaInput.value = "";
}