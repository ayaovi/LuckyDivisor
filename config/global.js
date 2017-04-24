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

luckyDivisor.global = {};

/**
 * A JSON object that contains the player data.
 */
luckyDivisor.global.playerData;

/**
 * Keeps track of the starting cube of the previous column during start up.
 */
luckyDivisor.global.previousColumnStartingCube;

/**
 * Keeps track of the last time that the player paused the game.
 */
luckyDivisor.global.pauseDate;

/**
 * Keeps track of how long a play has been paused.
 */
luckyDivisor.global.pauseDuration;

/**
 * Presents a new game option to the player at the end of the current game.
 */
luckyDivisor.global.newGameButton;

/**
 * A p5.image to be loaded as background.
 */
luckyDivisor.global.img;

/**
 * A confirmation that the image is available for loading as background.
 */
luckyDivisor.global.imageAvailable = false;

/**
 * Confimrs whether the current play is running.
 */
luckyDivisor.global.playHasEnded = false;

/**
 * Keeps track of the number of the current play. It is used to increase the pn cube falling speed by 10% their initial speed every 3 plays.
 */
luckyDivisor.global.numberOfPlay;

/**
 * A collection of worlds throughout the game.
 */
luckyDivisor.global.worlds = [];

/**
 * A pointer to the current world.
 */
luckyDivisor.global.currentWorld;

/**
 * Keeps track of all key presses.
 */
luckyDivisor.global.keyMap = {
    /** ctrl */
    17: false,
    /** spacebar */
    32: false,
    /** s */
    82: false,
    /** z */
    90: false
};

/**
 * A flag to confirm whether there is an ongoing testing.
 */
luckyDivisor.global.testing = true;