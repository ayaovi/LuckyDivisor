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

luckyDivisor.config = new function() {
    this.WIDTH_OF_GAME_FRAME = 500;
    this.HEIGHT_OF_GAME_FRAME = 600;
    this.WIDTH_OF_CANVAS = this.WIDTH_OF_GAME_FRAME * 0.8;
    this.HEIGHT_OF_CANVAS = this.HEIGHT_OF_GAME_FRAME;
    this.WIDTH_OF_BUTTON = this.WIDTH_OF_GAME_FRAME * 0.3;
    this.HEIGHT_OF_BUTTON = this.WIDTH_OF_BUTTON * 0.25;
    this.DEFAULT_BUTTON_TEXT_SIZE = this.HEIGHT_OF_BUTTON * 0.6;
    this.END_OF_GAME_TEXT_SIZE = this.HEIGHT_OF_GAME_FRAME * 0.1;
    this.NUMBER_OF_COLUMNS = 10;
    this.gameStatus = "Stopped";
    this.NUMBER_OF_PLAYER_STARTING_LIFE_STARS = 5;
    this.DEFAULT_CANVAS_BACKGROUND_COLOUR = 75;
    this.DEFAULT_CANVAS_BACKGROUND_IMAGE = "../assets/milky_way_grayscale.jpg";
    this.CUBE_COLOUR_MAP = {};
    this.defaultPlayDuration = [0, 20];
    this.playerControls = [37, 39];
    this.gameControls = [32];
    this.PRIME_NUMBERS = [2, 7, 3, 5, 1, 2, 5];
    this.CUBE_DELAYS = [3, 0, 1, 2, 1, 3, 0, 2];
    this.DEFAULT_SIDE_PANEL_PADDING = 15;
    this.GAME_OVER_TEXT = "GAME OVER";
    this.TIME_OUT_TEXT = "TIME OUT";
}