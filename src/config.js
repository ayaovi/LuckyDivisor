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
 * Defines how wide the side panel (where the list of cubes to collect is displayed).
 */
var WIDTH_OF_SIDE_PANEL = WIDTH_OF_GAME_FRAME * 0.2;

/**
 * Defines how high the side panel is.
 */
var HEIGHT_OF_SIDE_PANEL = HEIGHT_OF_GAME_FRAME;

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
 * The occurrence multiplier needs to be displayed/printed next to the cube in 
 * the side panel. As such the x-coordinate of the position of the text (e.g. x2) 
 * would be the cube.position.x plus this default padding.
 */
var DEFAULT_PADDING_OF_CUBE_OCCURENCE_IN_SIDE_PANEL = SIDE_OF_CUBE + 10;

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
 * The default score text size is set to be 80% the height of the top panel.
 */
var DEFAULT_BUTTON_TEXT_SIZE = HEIGHT_OF_BUTTON * 0.6;

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
var defaultPlayDuration = [0, 5];

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
 * The game controls is made up of pause and play, which is the same button space bar.
 * When the game is pause, the game status is changed. That way when "space bar" is 
 * pressed again, the play can continue.
 */
 var gameControls = [32];

/**
 * A record of all prime numbers in the game so far.
 */
var primeNumbers = [2, 7, 3, 1, 5];

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