/****************************************************************************************
 * filename: RandomInt.js
 * author: wheedables
 * date: 
 * description: generates a random integer
 *
 *
 ***/

 export default class RandomInt {

    static _seed = "420";

    constructor() {

    }

    static generate(intMax) {
        return Math.floor(Math.random() * Math.floor(intMax));
    }

 }