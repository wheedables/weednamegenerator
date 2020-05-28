/****************************************************************************************
 * filename: DataFetcher.js
 * author: wheedables
 * date: 
 * description: 
 *
 *
 ***/

import WNGN from "../WNGN.js";

export default class DataFetcher {

    //static _requestURL = "http://localhost:8888/assets/js/data.json";     // from whence to requesteth the DATA
    static _requestURL = "https://wheedables.github.io/weednamegenerator/assets/js/data.json"

    constructor() {

    }

    static fetchTheData() {

        let request = new XMLHttpRequest();
        request.open('GET', DataFetcher._requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function () {

            // for (const property in request.response) {
            //     console.log(`${property}: ${request.response[property]}`);
            // }

            WNGN._theDATA = request.response;

        }


    }

}