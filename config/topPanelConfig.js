/**
 * @file : config.js
 *
 * @description : Config is simply an assembly of all global variables and functions.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


/**
 * The top panel is where Player life stars, score and the timer are 
 * displayed. At this point in time, this panel is a white rectangle 
 * with length the width of the game canvas and width 
 */
var HEIGHT_TOP_PANEL = HEIGHT_OF_GAME_FRAME / 15;

/**
 * We want some space off the left-hand side of the top panel before we 
 * start printing the time.
 */
var DEFAULT_TIMER_PADDING = HEIGHT_TOP_PANEL / 4;

/**
 * We want some space off the left-hand side of the top panel before we 
 * start printing the time.
 */
var DEFAULT_SCORE_PADDING = 0;

/**
 * We want the player score displayed just far enough from the clock to be 
 * be on its own in the top panel.
 */
var DEFAULT_SCORE_STARTING_POSITION = WIDTH_OF_CANVAS * 0.45;

/**
 * Sets location on the top panel where to start printing the player 
 * life stars.
 */
var PLAYER_STARS_STARTING_POSITION = WIDTH_OF_CANVAS * 0.70;