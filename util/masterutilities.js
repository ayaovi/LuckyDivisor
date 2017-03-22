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
 * @description checks whether the suplied array contains and element greater that the given threshold.
 *
 * @param array of integers, an integer threashold.
 *
 * @return true or false.
 */
luckyDivisor.util.containsElementGreaterThan = function(array, threshold) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] > threshold) {
			return true;
		}
	}
	return false;
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
function keyPressed() {
	/**
	 * Check whether the key pressed is SPACE_BAR
	 */
	if (keyCode == luckyDivisor.config.gameControls[0]) {
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
luckyDivisor.util.removeFromArray = function(array, target) {
	for (var i = array.length - 1; i >= 0; i--) {
		if (array[i] == target) {
			array.splice(i, 1);
			break;
		}
	}
}


/**
 * @description A function that pad number with zeros if necessary.
 *
 * @param a positive number.
 *
 * @return the number preceded with 0, should it be less than 10 or 
 * just the number itself otherwise.
 */
luckyDivisor.util.padWithZero = function(number) {
	return ((number < 10) ? "0" + number : number);
}


/**
 * @description a mouse click handler.
 *
 * @param none.
 *
 * @return none.
 */
function mouseClicked() {
	luckyDivisor.global.newGameButton.mouseClick(mouseX, mouseY);
}
