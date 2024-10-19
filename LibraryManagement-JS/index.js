let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");
let allBooksData = [];

let notFound = document.createElement("h1");
notFound.textContent = "No Results Found";
notFound.style.color = "red";
notFound.classList.add("d-none");
searchResults.appendChild(notFound);

let popularHead = document.createElement("h1");
popularHead.textContent = "Popular Books";
popularHead.style.color = "grey";
popularHead.classList.add("d-none");
searchResults.appendChild(popularHead);

function createAndAppend(item) {
    let {
        imageLink,
        author
    } = item;

    let eachBookCont = document.createElement("div");
    eachBookCont.classList.add("col-6");

    let bookImg = document.createElement("img");
    bookImg.setAttribute("src", imageLink);
    bookImg.setAttribute("alt", "Book Image");

    let authorEle = document.createElement("p");
    authorEle.textContent = author;

    eachBookCont.appendChild(bookImg);
    eachBookCont.appendChild(authorEle);
    searchResults.appendChild(eachBookCont);
}

// ...

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {

        notFound.classList.add("d-none");
        // spinner.classList.remove("d-none"); 

        let searchQuery = searchInput.value;

        if (searchQuery) {

            console.log(searchQuery);
            allBooksData = []; // Clear the array before fetching new data
            getTheData(searchQuery);
        } else {
            spinner.classList.add("d-done");
            notFound.classList.remove("d-none");
        }
    }
});

function getTheData(searchQuery) {
    let url = "https://apis.ccbp.in/book-store?title=" + searchQuery;
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            allBooksData = jsonData.search_results;
            displayResults();
        });
}

function displayResults() {
    spinner.classList.add("d-done");
    searchResults.innerHTML = ''; // clear previous results
    // popularHead.classList.add("d-none");
    popularHead.classList.remove("d-none");
    let found = false;
    for (let item of allBooksData) {
        if (item.title.toLowerCase().includes(searchInput.value.toLowerCase())) {
            found = true;
            createAndAppend(item);
        }
    }
    if (!found) {
        notFound.classList.remove("d-none");
    } else {
        notFound.classList.add("d-none");
    }
}