/**
 * @file : global.js
 *
 * @description : Global is simply an assembly of all global variables.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


var luckyDivisor = luckyDivisor || {};

luckyDivisor.global = {
    imageAvailable : false,
    playHasEnded : false,
    worlds : [],
    keyMap : {
        /** ctrl */
        17: false,
        /** spacebar */
        32: false,
        /** s */
        82: false,
        /** z */
        90: false
    },
    testing : true
};