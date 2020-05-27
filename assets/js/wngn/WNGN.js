/****************************************************************************************
 * filename: WNGN.js
 * author: wheedables
 * date: 
 * description: Weed Name GeNerator
 *
 *
 ***/

 import DataFetcher from "./parts/DataFetcher.js";



 /**************************
  * class: WNGN
  * description:  
  ***/
 export default class WNGN {


    static _requestURL = "http://localhost:8888/assets/js/data.json";     // from whence to requesteth the DATA

    static _theDATA = {}

    static _randomlyGeneratedWeedName = "the button hath been clicked"; // a place to put the randomly generated weed name

    constructor() {

        WNGN._theDATA = DataFetcher.fetchTheData();

    }

    go() {


        console.log(WNGN._theDATA);

    }

 }