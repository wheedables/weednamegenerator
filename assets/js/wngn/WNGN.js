/****************************************************************************************
 * filename: WNGN.js
 * author: wheedables
 * date: 
 * description: Weed Name GeNerator
 *
 *
 ***/

import DataFetcher from "./parts/DataFetcher.js";
import NameGenerator from "./parts/NameGenerator.js";
import RandomInt from "./parts/RandomInt.js";


/**************************
 * class: WNGN
 * description:  
 ***/
export default class WNGN {

    static _requestURL = "http://localhost:8888/assets/js/data.json";     // from whence to requesteth the DATA
    //static _requestURL = "https://wheedables.github.io/weednamegenerator/assets/js/data.json" 

    static _theDATA = {}

    static _randomlyGeneratedWeedName = ""; // a place to put the randomly generated weed name

    constructor() {


    }

    // the on switch
    static on() {

        WNGN._theDATA = DataFetcher.fetchTheData(WNGN._requestURL);

    }

    // makes the generator go. 
    static go() {

        // console.log(WNGN._theDATA);

        WNGN._randomlyGeneratedWeedName = NameGenerator.generateName(WNGN._theDATA);

        // if , for whatever reason *coughs* shoddy coding */coughs* the randomly generated name comes up empty or undefined, 
        // a rando error message will be displayed
        if (WNGN._randomlyGeneratedWeedName == "" || WNGN._randomlyGeneratedWeedName == undefined) {
            WNGN._randomlyGeneratedWeedName = WNGN._theDATA["error"][RandomInt.generate(WNGN._theDATA["error"].length)];
        }

        return WNGN._randomlyGeneratedWeedName;

    }

}