/**
 * @file : utilities.js
 *
 * @description : Config is simply an assembly of all global variables and functions.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

var luckyDivisor = luckyDivisor || {};

luckyDivisor.util = {};

/**
 * @description updates both pnCubeCreationReccordMap and numberOfPnCubeCreated 
 * to take into account the new prime number just have been generated.
 *
 * @param prime number.
 *
 * @return none.
 */
function updatePnCubeCreationRecords(primeNuber)
{
	++pnCubeCreationReccordMap[primeNuber];
	++numberOfPnCubeCreated;
}


/**
 * @description returns the prime number with the least occurrence so far in the play.
 *
 * @param.
 *
 * @return a prime integer.
 */
function getPrimeNumberWithTheLeastOccurrence()
{
	var primeNumberWithTheLeastOccurrence = 1;
	
	if (numberOfPnCubeCreated < NUMBER_OF_COLUMNS)
	{
		primeNumberWithTheLeastOccurrence = random(primeNumbers);
		updatePnCubeCreationRecords(primeNumberWithTheLeastOccurrence);
	}
	else
	{
		/**
		 * Get the prime number with the minimum occurrence.
		 */
		for (var key in pnCubeCreationReccordMap)
		{
			if (pnCubeCreationReccordMap[key] < pnCubeCreationReccordMap[primeNumberWithTheLeastOccurrence])
			{
				/**
				 * key in this case is a string. Strange I know, even though I add it as a number, 
				 * it comes out as a string. So it requires the parsing back to number. 
				 */
				primeNumberWithTheLeastOccurrence = parseInt(key);
			}
		}
		updatePnCubeCreationRecords(primeNumberWithTheLeastOccurrence);
	}
	
	return primeNumberWithTheLeastOccurrence;
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
	
	while (true)
	{
		if (!containsElementGreaterThan(divisors, 10))
		{
			break;
		}
		else
		{
			number = floor(random(2, 100));
			divisors = getPrimeFactors(number);
		}
	}
	return number;
}



/**
 * @description checks whether the suplied array contains and element greater that the given threshold.
 *
 * @param array of integers, an integer threashold.
 *
 * @return true or false.
 */
function containsElementGreaterThan(array, threshold)
{
	for (var i = 0; i < array.length; i++)
	{
		if (array[i] > threshold)
		{
			return true;
		}
	}
	return false;
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
 * @description this function is called once every time a key is pressed. 
 * The keyCode for the key that was pressed is stored in the keyCode variable.
 * (this description is taken from https://p5js.org/reference/#/p5/keyPressed).
 *
 * @param none.
 *
 * @return none.
 */
function keyPressed()
{
	/**
	 * Check whether the key pressed is SPACE_BAR
	 */
	if (keyCode == luckyDivisor.config.gameControls[0])
	{
		/**
		 * If so, pause or play the game.
		 */
		luckyDivisor.util.game.pauseOrPlay();
	}
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
 * @description returns the current system minute and second.
 *
 * @param none. 
 *
 * @return a new time.
 */
function getCurrentTime()
{
	return new Time(hour(), minute(), second());
}

/**
 * @description returns the current system date as an Extended date.
 *
 * @param none. 
 *
 * @return a new ExtendedDate.
 */
function getCurrentDate()
{
	var currentDate = new Date();
	return new ExtendedDate(currentDate.getTime());
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
 * @description a mouse click handler.
 *
 * @param none.
 *
 * @return none.
 */
function mouseClicked()
{
	luckyDivisor.config.newGameButton.mouseClick(mouseX, mouseY);
}
