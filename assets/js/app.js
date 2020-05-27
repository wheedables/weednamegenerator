/****************************************************************************************
 * filename: app.js 
 * author: wheedables2000
 * date: 
 * description: 
 * 
 * 
 ***/

 import WNGN from "./wngn/WNGN.js";


let submitButton = document.querySelector("#submit-button");    // the user will push a thing to make things go
let display = document.querySelector("#display");               // where teh name will be displayed

WNGN.on();    // fire up the generator, it takes a mo to get the data yo


submitButton.addEventListener("click", handleSubmitButtonClick);

function handleSubmitButtonClick(e) {


    // WNGN does it's thing...
    let randomlyGeneratedWeedName = WNGN.go();


    // assign it to the display
    display.innerHTML = randomlyGeneratedWeedName;


}
