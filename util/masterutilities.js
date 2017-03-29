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
 * @description checks whether the suplied cubes collide.
 *
 * @param two cubes.
 *
 * @return true or false.
 */
luckyDivisor.util.checkForCollision = function (cube1, cube2) {
	var x1 = cube1.position.x;
	var y1 = cube1.position.y;
	var x2 = cube2.position.x;
	var y2 = cube2.position.y;
	var w = luckyDivisor.config.SIDE_OF_CUBE;

	return collideRectRect(x1, y1, w, w, x2, y2, w, w);
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
 * @description updates the the pn cubes to be collected in the side panel.
 *
 * @param number.
 *
 * @return none.
 */
luckyDivisor.util.updateSidePanel = function (number) {
	if (luckyDivisor.global.sidePanel) {
		luckyDivisor.global.sidePanel.update(number);
	}
}


/**
 * @description Checks whether there is existing date on the player.
 *
 * @param none.
 *
 * @return none.
 */
luckyDivisor.util.initPlayerData = function () {
	if (window.localStorage.getItem('luckyDivisorPlayerData')) {
		luckyDivisor.global.playerData = JSON.parse(window.localStorage.getItem('luckyDivisorPlayerData'));
	}
	else {
		luckyDivisor.util.createNewPlayerData();
	}
}


/**
 * @description returns the player name.
 *
 * @param none.
 *
 * @return player name.
 */
luckyDivisor.util.playerName = function () {
	return (luckyDivisor.global.playerData) ? luckyDivisor.global.playerData['name'] : 'PLAYER';
}


/**
 * @description returns the player best score.
 *
 * @param none.
 *
 * @return player best score.
 */
luckyDivisor.util.playerBestScore = function () {
	return (luckyDivisor.global.playerData) ? luckyDivisor.global.playerData['bestScore'] : 0;
}


/**
 * @description returns the player credit point.
 *
 * @param none.
 *
 * @return player best score.
 */
luckyDivisor.util.playerCreditPoints = function () {
	return (luckyDivisor.global.playerData) ? luckyDivisor.global.playerData['creditPoints'] : 0;
}


/**
 * @description makes smiley or angry face.
 *
 * @param face type.
 *
 * @return none.
 */
luckyDivisor.util.makeEmotionalFace = function (type) {
	/**
	 * The point here is if the sidePanel exist then the emoticon must as well.
	 */
	if (luckyDivisor.global.sidePanel) {
		luckyDivisor.global.sidePanel.emoticon.type = type;
	}
}


/**
 * @description promts the player for his/her name.
 *
 * @param none.
 *
 * @return none.
 */
luckyDivisor.util.createNewPlayerData = function () {
	/**
	 * Create an empty JSON.
	 */
	luckyDivisor.global.playerData = {};

	/**
	 * prompt the player for a name.
	 */
	var playerName = prompt('Please tell me your name', 'PLAYER');

	/**
	 * Should the player name be valid, then add it to the JSON.
	 */
	if (playerName) {
		luckyDivisor.global.playerData['name'] = playerName;
	}

	/**
	 * The player best score is 0 by default.
	 */
	luckyDivisor.global.playerData['bestScore'] = 0;

	/**
	 * The player credit point is 0 by default.
	 */
	luckyDivisor.global.playerData['creditPoints'] = 0;
}


/**
 * @description checks whether there is new player data.
 *
 * @param none.
 *
 * @return true or false.
 */
luckyDivisor.util.newPlayerData = function () {
	return (luckyDivisor.global.playerData['bestScore'] < luckyDivisor.global.player.bestScore || luckyDivisor.global.playerData['creditPoints'] != luckyDivisor.global.player.creditPoints);
}


/**
 * @description checks whether there is a change in player data.
 * If so, saves it.
 *
 * @param none.
 *
 * @return none.
 */
luckyDivisor.util.checkForNewPlayerData = function () {
	if (luckyDivisor.util.newPlayerData) {
		/**
		 * Player best score only gets updated if a higher best score has been recorded.
		 */
		luckyDivisor.global.playerData['bestScore'] = (luckyDivisor.global.playerData['bestScore'] < luckyDivisor.global.player.bestScore) ? luckyDivisor.global.player.bestScore : luckyDivisor.global.playerData['bestScore'];
		/**
		 * Player credit point gets updated when ever there is a new credit point. The idea here is that
		 * credit point can be carried over from one session to another.
		 */
		luckyDivisor.global.playerData['creditPoints'] = luckyDivisor.global.player.creditPoints;

		luckyDivisor.util.savePlayerData();
	}
}


/**
 * @description saves the player data to local storage.
 *
 * @param none.
 *
 * @return none.
 */
luckyDivisor.util.savePlayerData = function () {
	/**
	 * First check that the player data does exist. And if so store it.
	 * There is a limit to how much data one can store via localStorage - approximately 5mb.
	 * If you are dealing with a lot of data you could soon reach that limit.
	 */
	if (luckyDivisor.global.playerData) {
		window.localStorage.setItem('luckyDivisorPlayerData', JSON.stringify(luckyDivisor.global.playerData));
	}
}


/**
 * @description returns a new cube id.
 *
 * @param number.
 *
 * @return none.
 */
luckyDivisor.util.newID = function () {
	return ++luckyDivisor.global.ID;
}


/**
 * @description burns the player for collecting a non divisor cube.
 *
 * @param none.
 *
 * @return none.
 */
luckyDivisor.util.burnPlayer = function () {
	if (luckyDivisor.global.player) {
		luckyDivisor.global.player.burn();
	}
}


/**
 * @description updates player score.
 *
 * @param number.
 *
 * @return none.
 */
luckyDivisor.util.updatePlayerScore = function (number) {
	if (luckyDivisor.global.player) {
		luckyDivisor.global.player.updateScore(number);
	}
}


/**
 * @description pushes a new event to the event queue.
 *
 * @param event.
 *
 * @return none.
 */
luckyDivisor.util.pushNewEventToQueue = function (newEvent) {
	if (luckyDivisor.global.eventQueue) {
		luckyDivisor.global.eventQueue.push(newEvent);
	}
}


/**
 * @description returns the player cube divisors.
 *
 * @param none.
 *
 * @return none.
 */
luckyDivisor.util.playerCubeDivsors = function () {
	return (luckyDivisor.global.playerCube) ? luckyDivisor.global.playerCube.divisors : [];
}


/**
 * @description computes the active milliseconds (the amount of milliseconds the pn cube has been actually falling) of a pn cube.
 *
 * @param cube starting date.
 *
 * @return none.
 */
luckyDivisor.util.cubeActiveMilliSeconds = function (cubeStartDate) {
	var totalMilliseconds = luckyDivisor.util.date.getCurrentDate().minus(cubeStartDate).getTime();
	return (luckyDivisor.global.pauseDuration) ? (totalMilliseconds - luckyDivisor.global.pauseDuration) :totalMilliseconds;
}



/**
 * @description shows the player score in the tope panel.
 *
 * @param none.
 *
 * @return none.
 */
luckyDivisor.util.showPlayerScore = function () {
	if (luckyDivisor.global.player.score) {
		luckyDivisor.global.player.score.show();
	}
}


/**
 * @description shows the player life stars in the tope panel.
 *
 * @param none.
 *
 * @return none.
 */
luckyDivisor.util.showPlayerLifeStars = function () {
	if (luckyDivisor.global.player.playerLifeStars) {
		for (var i = 0; i < luckyDivisor.global.player.playerLifeStars.length; i++) {
			luckyDivisor.global.player.playerLifeStars[i].show();
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
luckyDivisor.util.padWithZero = function (number) {
	return ((number < 10) ? "0" + number : number);
}


/**
 * @description a mouse click handler.
 *
 * @param none.
 *
 * @return none.
 */
function mouseClicked () {
	if (luckyDivisor.global.newGameButton) {
		luckyDivisor.global.newGameButton.mouseClick(mouseX, mouseY);
	}
}
