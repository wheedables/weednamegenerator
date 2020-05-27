/****************************************************************************************
 * filename: app.js 
 * author: wheedables2000
 * date: 
 * description: 
 * 
 * 
 ***/



let submitButton = document.querySelector("#submit-button");
let display = document.querySelector("#display");
let randomlyGeneratedWeedName = "the button hath been clicked";
let theData = {};

submitButton.addEventListener("click", handleSubmitButtonClick);

function handleSubmitButtonClick(e) {


    display.innerHTML = randomlyGeneratedWeedName;



}