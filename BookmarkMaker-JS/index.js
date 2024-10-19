// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");


siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});

siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});

function addAndAppendBookmark() {


    let bookListEle = document.createElement("li");
    bookmarksList.appendChild(bookListEle);

    let siteName = document.createElement("p");
    siteName.textContent = siteNameInput.value;
    siteName.classList.add("site-name-p");
    bookListEle.appendChild(siteName);

    let siteLinkEle = document.createElement("a");
    siteLinkEle.href = siteUrlInput.value;
    siteLinkEle.textContent = siteUrlInput.value;
    siteLinkEle.target = "_blank";
    bookListEle.appendChild(siteLinkEle);
}

function validateFormData() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    }
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    }
}


bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();

    validateFormData();
    addAndAppendBookmark();
});