/**
 * @file : config.js
 * @description : 
 * @author : Ayaovi Espoir Djissenou
 * @version : 
 */


var WIDTH_OF_GAME_FRAME = 500;
var HEIGHT_OF_GAME_FRAME = 600;

var WIDTH_OF_CANVAS = (WIDTH_OF_GAME_FRAME * 4) / 5;
var HEIGHT_OF_CANVAS = HEIGHT_OF_GAME_FRAME;

var WIDTH_OF_SIDE_PANEL = WIDTH_OF_GAME_FRAME / 5;
var HEIGHT_OF_SIDE_PANEL = HEIGHT_OF_GAME_FRAME;

var NUMBER_OF_COLUMNS = 10;
var NUMBER_OF_ROWS = NUMBER_OF_COLUMNS * 5;

var DEFAULT_COLUMN_PADDING = 5;
var SIDE_OF_CUBE = (WIDTH_OF_CANVAS / NUMBER_OF_COLUMNS) - (DEFAULT_COLUMN_PADDING * 2);

var gameStatus = "stopped";

var NUMBER_OF_PLAYER_STARTING_LIFE_STARS = 5;

var DEFAULT_PN_CUBE_SPEED = 0.02;
var PN_CUBE_SPEED_VARIANT_MULTIPLIER = 0.01;
var DEFAULT_PLAYER_CUBE_SPEED = 10;

var DEFAULT_CANVAS_BACKGROUND_COLOUR = 0;
var DEFAULT_CANVAS_BACKGROUND_IMAGE;

var CUBE_COLOUR_MAP = {};

var divisors = [];

var gameCubes = [];

var playerControls = [37, 39];


// A function to check whether a number is prime.
function isPrime(number)
{
	if (number <= 0)
	{
		return false;
	}
	else if (number == 1 || number == 2)
	{
		return true;
	}
	else
	{
		var endOfRange = floor(sqrt(number));
		var i = 0;
		
		while (i <= endOfRange)
		{
			if (number % i == 0)
			{
				return false;
			}
			i++;
		}
		return true;
	}
}

// A fuction that given a list divisors, returns a combinition of all their colours put together.
function combineColours(divisors)
{
	// TODO.
}


function gameOver()
{
	// TODO : Reset all the necessary stuff.
}

function pause()
{
	// If possible Stack() everything.
}