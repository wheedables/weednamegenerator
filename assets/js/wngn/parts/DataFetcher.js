/****************************************************************************************
 * filename: DataFetcher.js
 * author: wheedables
 * date: 
 * description: 
 *
 *
 ***/

export default class DataFetcher {

    static _requestURL = "http://localhost:8888/assets/js/data.json";     // from whence to requesteth the DATA

    constructor(requestURL) {

        DataFetcher._requestURL = requestURL;
        

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
        }

        return request.response;

    }

}