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
 * Defines how wide the game window/frame is.
 */
var WIDTH_OF_GAME_FRAME = 500;

/**
 * Defines how high the game window/frame is.
 */
var HEIGHT_OF_GAME_FRAME = 600;

/**
 * Defines how wide the canvas (where the cubes are falling) is.
 */
var WIDTH_OF_CANVAS = WIDTH_OF_GAME_FRAME * 0.8;

/**
 * Defines how high the canvas is.
 */
var HEIGHT_OF_CANVAS = HEIGHT_OF_GAME_FRAME;

/**
 * Defines the number of columns on the game canvas.
 */
var NUMBER_OF_COLUMNS = 10;

/**
 * Defines the width of every columns on the game canvas.
 */
var COLUMN_WIDTH = WIDTH_OF_CANVAS / NUMBER_OF_COLUMNS;

/**
 * A Cube falling down a Column need to be centred in that Column.
 * Hence the need for a default padding pixel of any Cube in any 
 * Column.
 */
var DEFAULT_COLUMN_PADDING = 5;

/**
 * A Cube is at this point in time a square. So this variable defines 
 * the side of this square that is the Cube.
 */
var SIDE_OF_CUBE = (WIDTH_OF_CANVAS / NUMBER_OF_COLUMNS) - (DEFAULT_COLUMN_PADDING * 2);

/**
 * The top panel is where Player life stars, score and the timer are 
 * displayed. At this point in time, this panel is a white rectangle 
 * with length the width of the game canvas and width 
 */
var HEIGHT_TOP_PANEL = HEIGHT_OF_GAME_FRAME / 15;

/**
 * A player life star is indeed represented as a star and needs to be 
 * nicely fitted into the top panel. Hence the need for a size for it.
 */
var SIZE_OF_A_PLAYER_STAR = HEIGHT_TOP_PANEL * 0.6;

/**
 * Keeps track to game status as either Running, Paused, Stopped.
 */
var gameStatus = "Stopped";

/**
 * A default setting that set the number of life stars that a player 
 * starts with.
 */
var NUMBER_OF_PLAYER_STARTING_LIFE_STARS = 5;

/**
 * Sets location on the top panel where to start printing the player 
 * life stars.
 */
var PLAYER_STARS_STARTING_POSITION = WIDTH_OF_CANVAS * 0.70;

/**
 * The minimum speed at which any Pn Cube must fall.
 */
var DEFAULT_PN_CUBE_SPEED = 1.3;

/**
 * This is used to set apart denser cubes (i.e. the ones with bigger 
 * numbers) from the lighter ones (i.e. the ones with smaller numbers).
 */
var PN_CUBE_SPEED_VARIANT_MULTIPLIER = 0.1;

/**
 * The speed at which a player's cube moves. Maybe in further version 
 * we can have a feature where this speed can be increased.
 */
var DEFAULT_PLAYER_CUBE_SPEED = 5;

/**
 * The colour of the game canvas background.
 */
var DEFAULT_CANVAS_BACKGROUND_COLOUR = 75;

/**
 * The background of the game canvas can either be a colour or an image.
 */
var DEFAULT_CANVAS_BACKGROUND_IMAGE = "../assets/milky_way.jpg";

/**
 * The default padding of the numbers on the cubes. That way having them 
 * centred.
 */
var CUBE_NUMBER_PADDING = 5;

/**
 * The size of the number printed on the cubes is relative to the side of 
 * the cubes. However the padding of 5 is consistent.
 */
var DEFAULT_CUBE_NUMBER_TEXT_SIZE = SIDE_OF_CUBE - 2 * CUBE_NUMBER_PADDING;

/**
 * The timer is displayed as a text. minute:second. And the text size is 
 * set to be 80% the height of the top panel.
 */
var DEFAULT_TIMER_TEXT_SIZE = HEIGHT_TOP_PANEL * 0.8;

/**
 * The default score text size is set to be 80% the height of the top panel.
 */
var DEFAULT_SCORE_TEXT_SIZE = HEIGHT_TOP_PANEL * 0.8;

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
 * be on its own.
 */
var DEFAULT_SCORE_STARTING_POSITION = WIDTH_OF_CANVAS * 0.45;

/**
 * Its value is used for the ID of every cube in the game. It is to be 
 * restarted at the beginning of every play and incremented once a cube 
 * takes on its current value.
 */
var ID = 0;

/**
 * A map of a Pn number to a pre-determined colour.
 */
var CUBE_COLOUR_MAP = {};

/**
 * The default play duration upon release would be 1 min 0 sec. There may 
 * be a feature in future releases that extends this play duration.
 */
var defaultPlayDuration = [0, 10];

/**
 * A record of all cubes in the game.
 */
var gameCubes = [];

/**
 * A record of all columns in the game.
 */
var columns = [];

/**
 * A reference to the player cube.
 */
var playerCube;

/**
 * The values of the player control keys (arrow LEFT and RIGHT).
 */
var playerControls = [37, 39];

/**
 * A record of all prime numbers in the game so far.
 */
var primeNumbers = [2, 7, 3, 1, 5];

/**
 * A reference to the top panel.
 */
var panel;

/**
 * A reference to the player.
 */
var player;

/**
 * A reference to the image to be set as background.
 */
var img;

/**
 * A record of all possible delays. These were supposed to be randomly 
 * generated. However the result was not appealing. Hence this.
 */
var cubeDelays = [3, 5, 1, 4, 2, 0];

/**
 * Keeps track of the starting time of the previous column during start up.
 */
var previousColumnStartingTime;

/**
 * Keeps track of the starting cube of the previous column during start up.
 */
var previousColumnStartingCube;