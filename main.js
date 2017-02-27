var WIDTH_OF_GAME_FRAME = 400;
var HEIGHT_OF_GAME_FRAME = 600;

var WIDTH_OF_CANVAS = (WIDTH_OF_GAME_FRAME * 3) / 4;
var HEIGHT_OF_CANVAS = HEIGHT_OF_GAME_FRAME;

var WIDTH_OF_CANVAS = WIDTH_OF_GAME_FRAME / 3;
var HEIGHT_OF_SIDE_PANEL = HEIGHT_OF_GAME_FRAME;

var NUMBER_OF_COLUMNS = 10;
var NUMBER_OF_ROWS = NUMBER_OF_COLUMNS * 5;

var DEFAULT_COLUMN_PADDING = 5;
var SIDE_OF_CUBE = (WIDTH_OF_CANVAS / NUMBER_OF_COLUMNS) - (DEFAULT_COLUMN_PADDING * 2);

var gameStatus = "stopped";

var NUMBER_OF_PLAYER_STARTING_LIFE_STARS = 5;

var DEFAULT_SPEED = 0.02;
var SPEED_VARIANT_MULTIPLIER = 0.01;

var CUBE_COLOUR_MAP = new Map();
//CUBE_COLOUR_MAP.set(1, color(248, 206, 204));
CUBE_COLOUR_MAP.set(1, color('#F8CECC'));
//CUBE_COLOUR_MAP.set(2, color(213, 232, 212));
CUBE_COLOUR_MAP.set(2, color('#D5E8D4'));
//CUBE_COLOUR_MAP.set(3, color(225, 213, 231));
CUBE_COLOUR_MAP.set(3, color('#E1D5E7'));
//CUBE_COLOUR_MAP.set(5, color(218, 232, 252));
CUBE_COLOUR_MAP.set(5, color('#DAE8FC'));
//CUBE_COLOUR_MAP.set(7, color(255, 255, 136));
CUBE_COLOUR_MAP.set(7, color('#FFFF88'));

var DEFAULT_CANVAS_BACKGROUND_COLOUR = 255;
var DEFAULT_CANVAS_BACKGROUND_IMAGE;

var divisors = [];

var gameCubes = [];

function setup()
{
	background(DEFAULT_CANVAS_BACKGROUND_COLOUR);
	//background(255);
	createCanvas(WIDTH_OF_CANVAS, HEIGHT_OF_CANVAS);
	
	gameCubes.push(new Cube(20, 0, createVector((WIDTH_OF_CANVAS - SIDE_OF_CUBE) / 2, HEIGHT_OF_CANVAS - SIDE_OF_CUBE)));
}

function draw()
{
	for (var i = 0; i < gameCubes.length; i++)
	{
		gameCubes[i].show();
	}
}