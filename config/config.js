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

    this.COLUMN_WIDTH = this.WIDTH_OF_CANVAS / this.NUMBER_OF_COLUMNS;
    this.DEFAULT_COLUMN_PADDING = 5;

    this.SIDE_OF_CUBE = (this.WIDTH_OF_CANVAS / this.NUMBER_OF_COLUMNS) - (this.DEFAULT_COLUMN_PADDING * 2);
    this.DEFAULT_PN_CUBE_SPEED = 1.3;
    this.PN_CUBE_SPEED_VARIANT_MULTIPLIER = 0.1;
    this.DEFAULT_PLAYER_CUBE_SPEED = 5;
    this.CUBE_NUMBER_PADDING = 5;
    this.DEFAULT_CUBE_NUMBER_TEXT_SIZE = this.SIDE_OF_CUBE - 2 * this.CUBE_NUMBER_PADDING;

    this.HEIGHT_TOP_PANEL = this.HEIGHT_OF_GAME_FRAME / 15;
    this.DEFAULT_SCORE_TEXT_SIZE = this.HEIGHT_TOP_PANEL * 0.8;

    this.WIDTH_OF_SIDE_PANEL = this.WIDTH_OF_GAME_FRAME * 0.2;
    this.HEIGHT_OF_SIDE_PANEL = this.HEIGHT_OF_GAME_FRAME;
    this.DEFAULT_PADDING_OF_CUBE_OCCURENCE_IN_SIDE_PANEL = this.SIDE_OF_CUBE + 10;

    this.SIZE_OF_A_PLAYER_STAR = this.HEIGHT_TOP_PANEL * 0.6;

    this.DEFAULT_TIMER_TEXT_SIZE = this.HEIGHT_TOP_PANEL * 0.8;
    this.DEFAULT_TIMER_PADDING = this.HEIGHT_TOP_PANEL / 4;

    this.DEFAULT_TIMER_PADDING = this.HEIGHT_TOP_PANEL / 4;
    this.DEFAULT_SCORE_PADDING = 0;
    this.DEFAULT_SCORE_STARTING_POSITION = this.WIDTH_OF_CANVAS * 0.45;
    this.PLAYER_STARS_STARTING_POSITION = this.WIDTH_OF_CANVAS * 0.70;
}