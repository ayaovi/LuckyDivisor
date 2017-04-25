/**
 * @file : config.js
 *
 * @description : Config is simply an assembly of all global variables and functions.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


var luckyDivisor = luckyDivisor || {};

luckyDivisor.config = {
    WIDTH_OF_GAME_FRAME : 500,
    HEIGHT_OF_GAME_FRAME : 600,
    NUMBER_OF_COLUMNS : 10,
    gameStatus : "Stopped",
    NUMBER_OF_PLAYER_STARTING_LIFE_STARS : 5,
    DEFAULT_CANVAS_BACKGROUND_COLOUR : 75,
    DEFAULT_CANVAS_BACKGROUND_IMAGE : "../assets/milky_way_grayscale.jpg",
    CUBE_COLOUR_MAP : {},
    defaultPlayDuration : [0, 20],
    playerControls : [37, 39],
    gameControls : [32],
    PRIME_NUMBERS : [2, 7, 3, 5, 1, 2, 5],
    CUBE_DELAYS : [3, 0, 1, 2, 1, 3, 0, 2],
    DEFAULT_SIDE_PANEL_PADDING : 15,
    GAME_OVER_TEXT : "GAME OVER",
    TIME_OUT_TEXT : "TIME OUT"
};

/**
 * Defines how wide the canvas (where the cubes are falling) is.
 */
luckyDivisor.config.WIDTH_OF_CANVAS = luckyDivisor.config.WIDTH_OF_GAME_FRAME * 0.8;

/**
 * Defines how high the canvas is.
 */
luckyDivisor.config.HEIGHT_OF_CANVAS = luckyDivisor.config.HEIGHT_OF_GAME_FRAME;

/**
 * Defines how wide the button is.
 */
luckyDivisor.config.WIDTH_OF_BUTTON = luckyDivisor.config.WIDTH_OF_GAME_FRAME * 0.3;

/**
 * Defines how high the button is.
 */
luckyDivisor.config.HEIGHT_OF_BUTTON = luckyDivisor.config.WIDTH_OF_BUTTON * 0.25;

/**
 * The default score text size is set to be 80% the height of the top panel.
 */
luckyDivisor.config.DEFAULT_BUTTON_TEXT_SIZE = luckyDivisor.config.HEIGHT_OF_BUTTON * 0.6;

/**
 * A text to display onto the screen when the clock run out.
 */
luckyDivisor.config.END_OF_GAME_TEXT_SIZE = luckyDivisor.config.HEIGHT_OF_GAME_FRAME / 10;