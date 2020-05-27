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

let wngn = new WNGN();


submitButton.addEventListener("click", handleSubmitButtonClick);

function handleSubmitButtonClick(e) {


    // WNGN does it's thing...
    console.log("clicka clicka");
    wngn.go();


    // assign it to the display
    //display.innerHTML = randomlyGeneratedWeedName;


}
