/****************************************************************************************
 * filename: NameGenerator.js
 * author: wheedables
 * date: 
 * description: The actual name generator
 *
 *
 ***/

 import RandomInt from "./RandomInt.js";
 


 export default class NameGenerator {

    static randomlyGeneratedName = "";

    constructor() {

    }

    static generateName(nameData) {


        // loop through each property in the nameData object
        for (const property in nameData) {

            console.log("-----------------------------");

            console.log(RandomInt.generate(2));

            // creates a 50/50 ish shot of including this particular property

            console.log(`${property}: ${nameData[property]}`);

            console.log(nameData[property][3]);


        }


    }



 }
