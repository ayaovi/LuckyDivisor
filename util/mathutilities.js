/**
 * @file : mathutilities.js
 *
 * @description : an assembly of all math related functions.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


var luckyDivisor = luckyDivisor || {};
luckyDivisor.util.math = {};


/**
 * @description A function that adds two RGN colours.
 *
 * @param rgb1 and rgb2 which are two RGB colours.
 *
 * @retun an RGB colour that is a combination of rgb1 and rgb2.
 */
luckyDivisor.util.math.addRGBs = function(rgb1, rgb2) {
	var lab1 = luckyDivisor.util.cube.RGBtoLAB([red(rgb1), green(rgb1), blue(rgb1)]);
	var lab2 = luckyDivisor.util.cube.RGBtoLAB([red(rgb2), green(rgb2), blue(rgb2)]);

	var resultingLab = [];
	for (var i = 0; i < lab1.length; i++) {
		resultingLab[i] = (lab1[i] + lab2[i]) / 2.0;
	}
	return luckyDivisor.util.cube.LABtoRGB(resultingLab);
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
luckyDivisor.util.math.generatePlayerCubeNumber = function() {
	/**
	 * The player number is a number between 2-99.
	 */
	var number = floor(random(2, 100));

	/**
	 * All of the prime divisors of this number.
	 */
	var divisors = luckyDivisor.util.math.getPrimeFactors(number);
	
	while (true) {
		if (!containsElementGreaterThan(divisors, 10)) {
			break;
		}
		else {
			number = floor(random(2, 100));
			divisors = luckyDivisor.util.math.getPrimeFactors(number);
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
luckyDivisor.util.math.isPrime = function(number) {
	if (number <= 0) {
		return false;
	}
	else if (number == 1 || number == 2) {
		return true;
	}
	else {
		var endOfRange = floor(sqrt(number));
		var i = 2;
		
		while (i <= endOfRange) {
			if (number % i == 0) {
				return false;
			}
			i++;
		}
		return true;
	}
}



/**
 * @description A function that calculate all the prime factors of a number.
 *
 * @param a positive non-zero integer.
 *
 * @return an array of prime factors of the supplied number.
 */
luckyDivisor.util.math.getPrimeFactors = function(number) {
	var factors = [];
	factors.push(1);
	
	for (var i = 2; i <= number / i; i++) {
		while (number % i == 0) {
			factors.push(i);
			number /= i;
		}
	}
	
	if (number > 1) {
		factors.push(number);
	}
	return factors;
}