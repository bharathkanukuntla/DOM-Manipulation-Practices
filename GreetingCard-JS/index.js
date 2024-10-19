let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedJSON = JSON.parse(greeting);


let addressContainer = document.getElementById("addressContainer");
let fromAdd = document.getElementById("fromAdd");
let toAdd = document.getElementById("toAdd");
let greetText = document.getElementById("greetText");

fromAdd.textContent = "From: " + parsedJSON.from;
toAdd.textContent = "To: " + parsedJSON.to;
greetText.textContent = parsedJSON.greetText;