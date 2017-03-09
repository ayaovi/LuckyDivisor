/**
 * @file : utilities.js
 *
 * @description : Config is simply an assembly of all global variables and functions.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

/**
 * @description creates a new time for the current column being is different 
 * from that of the previous column.
 *
 * @param none.
 *
 * @return a new starting time.
 */
function getNewColumnStartingTime()
{
	var newColumnStartingTime = new Time(minute(), second() + random(cubeDelays));
	
	while(previousColumnStartingTime != undefined && newColumnStartingTime.equals(previousColumnStartingTime))
	{
		newColumnStartingTime = new Time(minute(), second() + random(cubeDelays));
	}
	
	previousColumnStartingTime = newColumnStartingTime;
	
	return newColumnStartingTime;
}


/**
 * @description creates a new Cube for the current column being is different 
 * from that of the previous column.
 *
 * @param xCoordinate.
 *
 * @return a new PnCube.
 */
function getNewColumnStartingCube(xCoordinate)
{
	var newColumnStartingCube = new PnCube(random(primeNumbers), ++ID, createVector(xCoordinate + DEFAULT_COLUMN_PADDING, 0));
	
	while(previousColumnStartingCube != undefined && newColumnStartingCube.equals(previousColumnStartingCube))
	{
		newColumnStartingCube = new PnCube(random(primeNumbers), ++ID, createVector(xCoordinate + DEFAULT_COLUMN_PADDING, 0));
	}
	
	previousColumnStartingCube = newColumnStartingCube;
	
	return newColumnStartingCube;
}

/** 
 * @description randomly generate a player cube number.
 * The number must be in the range 1-99 inclusive.
 * None of the number's prime factors must be bigger than 10.
 *
 * @param none.
 *
 * @return a non-zero positive integer between 2-99.
 */
function generatePlayerCubeNumber()
{
	/**
	 * Remember the player number is a number between 2-99.
	 */
	var number = floor(random(2, 100));

	/**
	 * All of the prime divisors of this number.
	 */
	var divisors = getPrimeFactors(number);

	/**
	 * Tracks whether we have discovered a prime factor greater than 10.
	 */
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


/**
 * @description A function to check whether a number is prime.
 *
 * @param an integer.
 *
 * @return true or false.
 */
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


/**
 * @description A function that given a list divisors, returns a 
 * combination of all their colours put together.
 *
 * @param an array of prime numbers less than 10 and excluding 0.
 *
 * @return an RGB colour that is equally made up of colour 
 * corresponding to the prime number.
 */
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


/**
 * @description A function to convert RGB to CMYK.
 *
 * @param an RGB colour.
 *
 * @return an array of the corresponding cyan, magenta, yellow 
 * values/percentages and the key that make up the RGB colour.
 */
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


/**
 * @description A function to convert CMYK to RGB.
 *
 * @param an array that contains the cyan, magenta, yellow 
 * and key values corresponding to an RGB colour.
 *
 * @return an array containing the red, green and blue values
 * or percentages that make up the RGB colour.
 */
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


/**
 * @description A function to convert RGB to LAB.
 *
 * @param an rgb colour.
 *
 * @return an array containing the L, A and B values make up 
 * the corresponding RGB colour.
 */
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


/**
 * @description A function to convert LAB to RGB.
 *
 * @param an array of containing the L, A and B values make up 
 * an RGB colour.
 *
 * @return an array containing the red, green and yellow values 
 * make up the corresponding RGB colour
 */
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


/**
 * @description calculate the perceptual distance between colours in CIELAB.
 *
 * @param 
 *
 * @return 
 */
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


/**
 * @description A game over even handler.
 *
 * @param none.
 *
 * @retun none.
 */
function gameOver()
{
	// TODO : Reset all the necessary stuff.
}


/**
 * @description A pause event handler.
 *
 * @param none.
 *
 * @return none.
 */
function pause()
{
	// If possible Stack() everything.
}


/**
 * @description A function that adds two RGN colours.
 *
 * @param rgb1 and rgb2 which are two RGB colours.
 *
 * @retun an RGB colour that is a combination of rgb1 and rgb2.
 */
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


/**
 * @description removes the last occurrence of an element.
 *
 * @param an array and a target element.
 *
 * @return none.
 */
function removeFromArray(array, target)
{
	for (var i = array.length - 1; i >= 0; i--) 
	{
		if (array[i] == target)
		{
			array.splice(i, 1);
			break;
		}
	}
}

/**
 * @description 
 *
 * @param 
 *
 * @return 
 */
// function removeCubeFromYetToBeCollecteList(array, targetCubeNumber)
// {
	// for (var i = array.length - 1; i >= 0; i--) 
	// {
		// if (array[i].number == targetCubeNumber)
		// {
			// array.splice(i, 1);
			// break;
		// }
	// }
// }


/**
 * @description A function to calculate the difference in time as [minute, second].
 *
 * @param previousMinute, previousSecond, currentMinute and currentSecond, which are 
 * all positive integers less than 60. 
 *
 * @return an array containing the time difference minute and second.
 */
function getTimeDifference(previousMinute, previousSecond, currentMinute, currentSecond)
{
	var timeDifference = (currentMinute * 60 + currentSecond) - (previousMinute * 60 + previousSecond);

	var minute = floor(timeDifference / 60);
	var second = timeDifference % 60;

	return [minute, second];
}


/**
 * @description returns the current system minute and second.
 *
 * @param none. 
 *
 * @return a new time.
 */
function getCurrentTime()
{
	return new Time(minute(), second());
}

/**
 * @description A function to format the game duration a string.
 *
 * @param 
 *
 * @return 
 */
function getStringGameDuration(startMinute, startSecond, currentMinute, currentSecond)
{
	var duration = getTimeDifference(previousMinute, previousSecond, currentMinute, currentSecond);
	return (padWithZero(duration[0]) + ":" + padWithZero(duration[1]));
}


/**
 * @description A function to determine how much time till end of play.
 *
 * @param startMinute, startSecond, currentMinute and currentSecond 
 * which are all integers. Like their names imply they are all in the 
 * range 0-59. The currentMinute and currentSecond can be determined 
 * inside this function; which I initially did. However for some reason 
 * I am not allowed to make a call to minute() and second() from p5.js 
 * reason why I reverted back to passing them as arguments.
 *
 * @return the minute and second as a colon separated string.
 */
function getStringTimeTillEndOfPlay(startMinute, startSecond, currentMinute, currentSecond)
{
	var duration = getTimeDifference(startMinute, startSecond, currentMinute, currentSecond);
	var timeTillEndOfPlay = getTimeDifference(duration[0], duration[1], defaultPlayDuration[0], defaultPlayDuration[1]);
	return (padWithZero(abs(timeTillEndOfPlay[0])) + ":" + padWithZero(abs(timeTillEndOfPlay[1])));
}


/**
 * @description A function that pad number with zeros if necessary.
 *
 * @param a positive number.
 *
 * @return the number preceded with 0, should it be less than 10 or 
 * just the number itself otherwise.
 */
function padWithZero(number)
{
	return ((number < 10) ? "0" + number : number);
}

/**
 * @description A function that calculate all the prime factors of a number.
 *
 * @param a positive non-zero integer.
 *
 * @return an array of prime factors of the supplied number.
 */
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


/**
 * @description An end of play handler.
 *
 * @param none.
 *
 * @return none.
 */
function endCurrentPlay()
{
	/**
	 * Reset the previous column starting time tracker to undefined.
	 */
	previousColumnStartingTime = undefined;
	/**
	 * Empty all columns.
	 */
	columns = [];

	/**
	 * Then start a new play.
	 */
	startNewPlay();
}


/**
 * @description A start of play handler.
 *
 * @param none.
 *
 * @return none.
 */
function startNewPlay()
{
	/**
	 * Reset ID to zero.
	 */
	ID = 0;
	
	/**
	 * Reset the event queue.
	 */
	eventQueue.reset();

	/**
	 * Reset the clock in the top panel.
	 */
	topPanel.reset();

	/**
	 * Create a new player cube.
	 */
	var playerCubeNumber = generatePlayerCubeNumber();
	playerCube = new PlayerCube(playerCubeNumber, 0, createVector((WIDTH_OF_CANVAS - SIDE_OF_CUBE) / 2, HEIGHT_OF_CANVAS - SIDE_OF_CUBE - 1));
	
	/**
	 * DEBUGGING.
	 */
	console.log(playerCube.divisors.toString());
	
	/**
	 * Create all columns.
	 */
	for (var i = 0; i < NUMBER_OF_COLUMNS; i++)
	{
		columns.push(new Column(COLUMN_WIDTH * i, i));
		columns[i].reset();
	}
	
	/**
	 * Reset the side panel.
	 */
	sidePanel.reset();
}