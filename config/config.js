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
 * Defines how wide the button is.
 */
var WIDTH_OF_BUTTON = WIDTH_OF_GAME_FRAME * 0.3;

/**
 * Defines how high the button is.
 */
var HEIGHT_OF_BUTTON = WIDTH_OF_BUTTON * 0.25;

/**
 * Defines the number of columns on the game canvas.
 */
var NUMBER_OF_COLUMNS = 10;

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
 * The colour of the game canvas background.
 */
var DEFAULT_CANVAS_BACKGROUND_COLOUR = 75;

/**
 * The background of the game canvas can either be a colour or an image.
 */
// var DEFAULT_CANVAS_BACKGROUND_IMAGE = "../assets/milky_way.jpg";

/**
 * The default score text size is set to be 80% the height of the top panel.
 */
var DEFAULT_BUTTON_TEXT_SIZE = HEIGHT_OF_BUTTON * 0.6;

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
var defaultPlayDuration = [0, 20];

/**
 * A record of all cubes in the game.
 */
// var gameCubes = [];

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
 * The game controls is made up of pause and play, which is the same button space bar.
 * When the game is pause, the game status is changed. That way when "space bar" is 
 * pressed again, the play can continue.
 */
 var gameControls = [32];

/**
 * A record of all prime numbers in the game so far.
 */
var primeNumbers = [2, 7, 3, 5, 1, 2, 5];

/**
 * A reference to the top panel.
 */
var topPanel;

/**
 * A reference to the side panel.
 */
var sidePanel;

/**
 * A reference to the player.
 */
var player;

/**
 * A record of all possible delays. These were supposed to be randomly 
 * generated. However the result was not appealing. Hence this.
 */
var cubeDelays = [3, 0, 1, 2, 1, 3, 0, 2];

/**
 * Keeps track of the starting time of the previous column during start up.
 */
var previousColumnStartingDate;

/**
 * Keeps track of the starting cube of the previous column during start up.
 */
var previousColumnStartingCube;

/**
 * A canvas alternative for the side panel. This became an issue du to the 
 * fact that p5.js requires only one canvas be drawn.
 */
var sidePanelBuffer;

/**
 * Is used to offset the cubes in the side panel so that they are not too 
 * close to the game canvas (i.e. where the pn cubes are falling).
 */
var DEFAULT_SIDE_PANEL_PADDING = 15;

/**
 * At this point in time is being used to store StartNewCubeEvent's.
 */
var eventQueue;

/**
 * A text to display onto the screen when the user go GAME OVER (i.e. runs 
 * out of life stars).
 */
var GAME_OVER_TEXT = "GAME OVER";

/**
 * A text to display onto the screen when the clock run out.
 */
var TIME_OUT_TEXT = "TIME OUT";

/**
 * A text to display onto the screen when the clock run out.
 */
var END_OF_GAME_TEXT_SIZE = HEIGHT_OF_GAME_FRAME / 10;

/**
 * Keeps track of the last time that the player paused the game.
 */
var pauseDate;

/**
 * Presents a new game option to the player at the end of the current game.
 */
var newGameButton;

/**
 * Keeps track of how many Pn Cubes have been created in a play.
 */
var numberOfPnCubeCreated;

/**
 * Keeps a record of the number of instances of any Pn Cube flavour that have been generated so far.
 */
var pnCubeCreationReccordMap = new Array();