let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainer = document.getElementById("profileContainer");
profileContainer.classList.add("d-flex", "flex-column", "justify-content-center");

let imgContainer = document.getElementById("imgContainer");
imgContainer.setAttribute("class", "image");
imgContainer.classList.add("image");


//creating image element
let imageElement = document.createElement("img");
imageElement.src = profileDetails.imgSrc;

imgContainer.appendChild(imageElement);

//creating heading element
let headingEle = document.createElement("h1");
headingEle.textContent = profileDetails.name;
profileContainer.appendChild(headingEle);

//creating paragraph element
let paraEle = document.createElement("p");
paraEle.textContent = "Age : " + profileDetails.age;
profileContainer.appendChild(paraEle);