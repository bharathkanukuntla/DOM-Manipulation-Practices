let petsImageUrls = {
    Dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
    Cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
    Parrot: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
    Spider: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
    Rabbit: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
};

let petSelectEl = document.getElementById("petSelect");
let petImgEl = document.getElementById("petImg");

petSelectEl.addEventListener("change", function(event) {
    let selectedItem = event.target.value;
    let selectedPetUrl = petsImageUrls[selectedItem];
    petImgEl.setAttribute("src", selectedPetUrl);
});