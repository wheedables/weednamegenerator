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


/**************************
 * class: WNGN
 * description:  
 ***/
export default class WNGN {

    //static _requestURL = "http://localhost:8888/assets/js/data.json";     // from whence to requesteth the DATA
    static _requestURL = "https://wheedables.github.io/weednamegenerator/assets/js/data.json" 

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

        //console.log(WNGN._theDATA);

        WNGN._randomlyGeneratedWeedName = NameGenerator.generateName(WNGN._theDATA);

        return WNGN._randomlyGeneratedWeedName;

    }

}