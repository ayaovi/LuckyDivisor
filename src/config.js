/**
 * @file : config.js
 * @description : Config is simply an assembly of all global variables and functions.
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

var DEFAULT_CANVAS_BACKGROUND_COLOUR = 100;
var DEFAULT_CANVAS_BACKGROUND_IMAGE;

var CUBE_NUMBER_PADDING = 5;

var DEFAULT_CUBE_NUMBER_TEXT_SIZE = SIDE_OF_CUBE - 2 * CUBE_NUMBER_PADDING;

var CUBE_COLOUR_MAP = {};

var playerNumberDivisors = [];

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

// A function that given a list divisors, returns a combination of all their colours put together.
function combineColours(divisors)
{
	// TODO.
}


// A function that generates the divisors of a number
function getDivisors(number)
{
	var divisors = [];
	divisors.push(1);	/* The number 1 is a divisor of every number. */
	
	var endOfRange = floor(number / 2);
	var i = 2;
	
	while (i <= endOfRange)
	{
		if (number % i == 0)
		{
			divisors.push(i);
		}
		i++;
	}
	return divisors;
}

function gameOver()
{
	// TODO : Reset all the necessary stuff.
}

function pause()
{
	// If possible Stack() everything.
}