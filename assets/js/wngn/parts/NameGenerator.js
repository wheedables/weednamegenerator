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

    static _randomlyGeneratedName = "";

    constructor() {

    }

    static generateName(nameData) {

        NameGenerator._randomlyGeneratedName = "";

        // once every 27~ish times the generator will return an empty string, which will throw an error.
        if (RandomInt.generate(27) == 16) {
            NameGenerator._randomlyGeneratedName = "";
            return NameGenerator._randomlyGeneratedName;    // bail on this function, yo
        }
        // once every 7 times or so, the generator will source from a collection of existing weed names
        // contributed by anonymous, classified individuals
        else if (RandomInt.generate(7) == 6) {

            NameGenerator._randomlyGeneratedName = NameGenerator.generatePreExistingName(nameData);

        } else {

            // otherwise a name is generated based on data in the nameData object
            NameGenerator._randomlyGeneratedName = NameGenerator.generateRandomNameFromData(nameData);
        }

        return NameGenerator._randomlyGeneratedName;

    }

    static generateRandomNameFromData(nameData) {

        let randomlyGeneratedName = "";
        let i = 0;  // our venerable iterator, to stop the loop from reaching the final properties in the object

        // loop through each property in the nameData object
        for (const property in nameData) {

            //console.log(`${property}: ${nameData[property]}`);

            if (i == 7) break; // shut er down before she reaches the last two obj props
            // the last two obj props currently containt coloquialisms & the pre-existing irl names


            // creates a 50/50 ish shot of including this particular property
            if (RandomInt.generate(2)) {

                // concatenate the randomly generated name with a random item from the array
                randomlyGeneratedName += nameData[property][RandomInt.generate(nameData[property].length)] + " ";

            }

            ++i; // iterator, iterate.

        }

        //console.log(randomlyGeneratedName);

        return randomlyGeneratedName;
    }

    // randomly picks an array index from the pre-existing property array
    static generatePreExistingName(nameData) {

        return nameData["pre-existing"][RandomInt.generate(nameData["pre-existing"].length)];

    }

}
