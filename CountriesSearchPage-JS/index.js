let searchInput = document.getElementById("searchInput");
let resultCountries = document.getElementById("resultCountries");
let spinner = document.getElementById("spinner");

let allCountries = [];

function createAndAppendCountries(countries) {
    let {
        flag,
        name,
        population
    } = countries;
    let countriesCard = document.createElement("div");
    countriesCard.classList.add("country-card", "d-flex", "flex-row", "col-12", "col-md-6");
    resultCountries.appendChild(countriesCard);

    let imageEle = document.createElement("img");
    imageEle.src = flag;
    imageEle.classList.add("country-flag");
    countriesCard.appendChild(imageEle);

    let countriesDesc = document.createElement("div");
    countriesDesc.classList.add("countriesDesc");
    countriesCard.appendChild(countriesDesc);

    let countryName = document.createElement("p");
    countryName.textContent = name;
    countryName.classList.add("country-name");
    countriesDesc.appendChild(countryName);

    let populationEle = document.createElement("p");
    populationEle.textContent = population;
    countryName.classList.add("country-population");
    countriesDesc.appendChild(populationEle);

}

function getData() {
    let url = "https://apis.ccbp.in/countries-data";

    let options = {
        method: "GET"
    };
    spinner.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            allCountries = jsonData;
            for (let countries of allCountries) {
                createAndAppendCountries(countries);
            }
        });
}

function displayCountries(countries) {
    resultCountries.innerHTML = '';
    for (let item of countries) {
        createAndAppendCountries(item);
    }
}

function getCountries() {
    let searchText = searchInput.value;
    let matchingCountries = [];

    for (let country of allCountries) {
        if (country.name.includes(searchText)) {
            matchingCountries.push(country);
        }
    }
    displayCountries(matchingCountries);
}

getData();

searchInput.addEventListener("keydown", getCountries);