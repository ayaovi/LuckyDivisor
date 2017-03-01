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

// var WIDTH_OF_SIDE_PANEL = WIDTH_OF_GAME_FRAME / 5;
// var HEIGHT_OF_SIDE_PANEL = HEIGHT_OF_GAME_FRAME;

var NUMBER_OF_COLUMNS = 10;
var NUMBER_OF_ROWS = NUMBER_OF_COLUMNS * 5;

var DEFAULT_COLUMN_PADDING = 5;
var SIDE_OF_CUBE = (WIDTH_OF_CANVAS / NUMBER_OF_COLUMNS) - (DEFAULT_COLUMN_PADDING * 2);

var HEIGHT_TOP_PANEL = (2 * HEIGHT_OF_GAME_FRAME) / 30;
var SIZE_OF_A_PLAYER_STAR = (HEIGHT_TOP_PANEL / 2) * 1.2;

var gameStatus = "stopped";

var NUMBER_OF_PLAYER_STARTING_LIFE_STARS = 5;
var PLAYER_STARS_STARTING_POSITION = WIDTH_OF_CANVAS * 0.70;

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

var panel;


// A function that randomly generate a player cube number.
// The number must be in the range 1-99 inclusive.
// None of the number's prime factors must be bigger than 10.
function generatePlayerCubeNumber()
{
	var number = floor(random(2, 100));
	var divisors = getPrimeFactors(number);
	var primeDivisorGreaterThanTen = false;
	
	while (true)
	{
		for (var i = 0; i < divisors.length; i++)
		{
			if (divisors[i] > 10)
			{
				primeDivisorGreaterThanTen = true;
				break;
			}
		}
		
		if (!primeDivisorGreaterThanTen)
		{
			break;
		}
		else
		{
			number = floor(random(2, 100));
			divisors = getPrimeFactors(number);
			primeDivisorGreaterThanTen = false;
		}
	}
	return number;
}


// A function that calculate all the prime factors of a number.
function getPrimeFactors(number)
{
	var factors = [];
	factors.push(1);
	
	for (var i = 2; i <= number / i; i++)
	{
		while (number % i == 0)
		{
			factors.push(i);
			number /= i;
		}
	}
	if (number > 1)
	{
		factors.push(number);
	}
	return factors;
}

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
		var i = 2;
		
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
	var resultingColour = addRGBs(CUBE_COLOUR_MAP[divisors[0]], CUBE_COLOUR_MAP[divisors[1]]);

	for (var i = 2; i < divisors.length; i++) 
	{
		resultingColour = addRGBs(resultingColour, CUBE_COLOUR_MAP[divisors[i]]);
	}

	// Instead of doing it the way above, we can convert the color from 
	// every divisor to LAB sum them up and average them and convert the 
	// resulting average back to RGB.
	return color(resultingColour[0], resultingColour[1], resultingColour[2]);
}


// A function that adds two RGN colours
function addRGBs(rgb1, rgb2)
{
	var lab1 = RGBtoLAB([red(rgb1), green(rgb1), blue(rgb1)]);
	var lab2 = RGBtoLAB([red(rgb2), green(rgb2), blue(rgb2)]);

	var resultingLab = [];
	for (var i = 0; i < lab1.length; i++) 
	{
		resultingLab[i] = (lab1[i] + lab2[i]) / 2.0;
	}

	return LABtoRGB(resultingLab);
}

// A function to convert RGB to CMYK.
function RGBtoCMYK(colour)
{
	var red = red(colour);
	var green = green(colour);
	var blue = blue(colour);

	var key = min(255 - red, min(255 - green, 255 - blue));
	var cyan = 255 * (255 - red - key) / (255 - key);
	var magenta = 255 * (255 - green - key) / (255 - key);
	var yellow = 255 * (255 - blue - key) / (255 - key);

	var cmyk = [];
	cmyk.push(cyan);
	cmyk.push(magenta);
	cmyk.push(yellow);
	cmyk.push(key);

	return cmyk;
}


// A function to convert CMYK to RGB.
function CMYKtoRGB(cmyk)
{
	var cyan = cmyk[0];
	var magenta = cmyk[1];
	var yellow = cmyk[2];
	var key = cmyk[3];

	var red = -((cyan * (255 - key)) / 255 + key - 255);
	var green = -((magenta * (255 - key)) / 255 + key - 255);
	var blue = -((yellow * (255 - key)) / 255 + key - 255);

	return color(red, green, blue);
}


// A function to convert RGB to LAB.
function RGBtoLAB(rgb)
{
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var x, y, z;

	r = (r > 0.04045) ? pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
	g = (g > 0.04045) ? pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
	b = (b > 0.04045) ? pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

	x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
	y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
	z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

	x = (x > 0.008856) ? pow(x, 1/3) : (7.787 * x) + 16/116;
	y = (y > 0.008856) ? pow(y, 1/3) : (7.787 * y) + 16/116;
	z = (z > 0.008856) ? pow(z, 1/3) : (7.787 * z) + 16/116;

	return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)];
}


// A function to convert LAB to RGB.
function LABtoRGB(lab)
{
	var y = (lab[0] + 16) / 116;
	var x = lab[1] / 500 + y;
	var z = y - lab[2] / 200;
	var r, g, b;

	x = 0.95047 * ((pow(x, 3) > 0.008856) ? pow(x, 3) : (x - 16/116) / 7.787);
	y = 1.00000 * ((pow(y, 3) > 0.008856) ? pow(y, 3) : (y - 16/116) / 7.787);
	z = 1.08883 * ((pow(z, 3) > 0.008856) ? pow(z, 3) : (z - 16/116) / 7.787);

	r = x *  3.2406 + y * -1.5372 + z * -0.4986;
	g = x * -0.9689 + y *  1.8758 + z *  0.0415;
	b = x *  0.0557 + y * -0.2040 + z *  1.0570;

	r = (r > 0.0031308) ? (1.055 * pow(r, 1 / 2.4) - 0.055) : 12.92 * r;
	g = (g > 0.0031308) ? (1.055 * pow(g, 1 / 2.4) - 0.055) : 12.92 * g;
	b = (b > 0.0031308) ? (1.055 * pow(b, 1 / 2.4) - 0.055) : 12.92 * b;

	return [max(0, min(1, r)) * 255, max(0, min(1, g)) * 255, max(0, min(1, b)) * 255];
}


// calculate the perceptual distance between colors in CIELAB.
function deltaE(labA, labB)
{
	var deltaL = labA[0] - labB[0];
	var deltaA = labA[1] - labB[1];
	var deltaB = labA[2] - labB[2];
	var c1 = sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
	var c2 = sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
	var deltaC = c1 - c2;
	var deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
	deltaH = (deltaH < 0) ? 0 : sqrt(deltaH);
	var sc = 1.0 + 0.045 * c1;
	var sh = 1.0 + 0.015 * c1;
	var deltaLKlsl = deltaL / (1.0);
	var deltaCkcsc = deltaC / (sc);
	var deltaHkhsh = deltaH / (sh);
	var i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
	
	return (i < 0) ? 0 : sqrt(i);
}


// A function that generates the divisors of a number
// function getPrimeDivisors(number)
// {
	// var primeDivisors = [];
	// primeDivisors.push(1);
	// var i = 2;
	
	// while (i <= number)
	// {
		// if (number % i == 0)
		// {
			// if (isPrime(i))
			// {
				// primeDivisors.push(i);
			// }
		// }
		// i++;
	// }
	// return primeDivisors;
// }

function gameOver()
{
	// TODO : Reset all the necessary stuff.
}

function pause()
{
	// If possible Stack() everything.
}