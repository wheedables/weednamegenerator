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

        NameGenerator.randomlyGeneratedName = "";


        // loop through each property in the nameData object
        for (const property in nameData) {

            // creates a 50/50 ish shot of including this particular property
            if (RandomInt.generate(2)) {

                // concatenate the randomly generated name with a random item from the array
                NameGenerator.randomlyGeneratedName += nameData[property][RandomInt.generate(nameData[property].length)] + " ";

            }

            //console.log(`${property}: ${nameData[property]}`);

            console.log(NameGenerator.randomlyGeneratedName);


        }

        return NameGenerator.randomlyGeneratedName;

    }



 }
