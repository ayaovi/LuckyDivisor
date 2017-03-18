var luckyDivisor = luckyDivisor || {};

luckyDivisor.util.game = {};



/**
 * @description displays a message on the game canvas.
 *
 * @param none.
 *
 * @retun none.
 */
luckyDivisor.util.game.displayMessageOnCanvas = function(message)
{
	/**
	 * We would like to print the message in white.
	 */
	fill(255);
	
	/**
	 * By default the size of the texts in the message is END_OF_GAME_TEXT_SIZE;
	 */
	textSize(END_OF_GAME_TEXT_SIZE);
	
	/**
	 * Finally the message is printed right at the center of the canvas.
	 */
	var x = (WIDTH_OF_CANVAS - textWidth(message)) / 2;
	var y = HEIGHT_OF_CANVAS / 2;
	
	text(message, x, y);
}




/**
 * @description displays the new game button on the game canvas.
 *
 * @param none.
 *
 * @retun none.
 */
luckyDivisor.util.game.displayNewGameButton = function()
{
	/**
	 * Make the new game button visible and display it on the canvas.
	 */
	newGameButton.isVisible = true;
	newGameButton.show();
}



/**
 * @description A pause event handler.
 *
 * @param none.
 *
 * @return none.
 */
luckyDivisor.util.game.pauseOrPlay = function()
{
	if (gameStatus == "Running")
	{
		/**
		 * Set the game status to Paused.
		 */
		gameStatus = "Paused";
		
		/**
		 * Record this pause date.
		 */
		pauseDate = getCurrentDate();
		
		/**
		 * Stop the looping of the draw() in main.js.
		 */
		noLoop();
	}
	else if (gameStatus == "Paused")
	{
		/**
		 * Set the game status to Running.
		 */
		gameStatus = "Running";
		
		/**
		 * Update the play duration of the clock.
		 */
		topPanel.clock.playDuration = topPanel.clock.playDuration.plus(new ExtendedDate(getCurrentDate().minus(pauseDate)));
		
		/**
		 * Bring back the draw() looping.
		 */
		loop();
	}
}




/**
 * @description A start of play handler.
 *
 * @param none.
 *
 * @return none.
 */
luckyDivisor.util.game.startNewPlay = function()
{
	/**
	 * Reset the new game button to invisible.
	 */
	luckyDivisor.config.newGameButton.isVisible = false;
	
	/**
	 * Reset ID to zero.
	 */
	ID = 0;
	
	/**
	 * Reset the event queue.
	 */
	luckyDivisor.config.eventQueue.reset();

	/**
	 * Reset the clock in the top panel.
	 */
	luckyDivisor.config.topPanel.reset();

	/**
	 * Create a new player cube.
	 */
	var playerCubeNumber = generatePlayerCubeNumber();
	playerCube = new PlayerCube(playerCubeNumber, 0, createVector((luckyDivisor.config.WIDTH_OF_CANVAS - luckyDivisor.config.SIDE_OF_CUBE) / 2, luckyDivisor.config.HEIGHT_OF_CANVAS - luckyDivisor.config.SIDE_OF_CUBE - 1));
	
	/**
	 * DEBUGGING.
	 */
	// console.log(playerCube.divisors.toString());
	
	/**
	 * Create all columns.
	 */
	for (var i = 0; i < luckyDivisor.config.NUMBER_OF_COLUMNS; i++)
	{
		luckyDivisor.global.columns.push(new Column(luckyDivisor.config.COLUMN_WIDTH * i, i));
		
		/**
		 * This needs to happen every time a column is created. Because a columns is not reset in the constructor.
		 */
		luckyDivisor.global.columns[i].reset();
	}
	
	/**
	 * Reset the side panel.
	 */
	luckyDivisor.global.sidePanel.reset();
}



/**
 * @description An end of play handler.
 *
 * @param none.
 *
 * @return none.
 */
luckyDivisor.util.game.endCurrentPlay = function()
{
	/**
	 * Reward a life star for completing play.
	 */
	luckyDivisor.global.player.rewardLifeStar();

	/**
	 * Reset the previous column starting time tracker to undefined.
	 */
	luckyDivisor.global.previousColumnStartingDate = undefined;
	
	/**
	 * Empty all columns.
	 */
	luckyDivisor.global.columns = [];

	/**
	 * Then start a new play.
	 */
	luckyDivisor.util.game.startNewPlay();
}



/**
 * @description A game over even handler.
 *
 * @param none.
 *
 * @retun none.
 */
luckyDivisor.util.game.endGame = function(endOfGameCode)
{
	/**
	 * Determine the text to display on screen.
	 * code 0 ----> Game Over.
	 * code 1 ----> Time Out.
	 */
	var endOfGameMessage = (endOfGameCode == 0) ? luckyDivisor.config.GAME_OVER_TEXT : luckyDivisor.config.TIME_OUT_TEXT;
	
	/**
	 * The display the endOfGameMessage on the canvas.
	 */
	luckyDivisor.util.game.displayMessageOnCanvas(endOfGameMessage);
	
	luckyDivisor.util.game.displayNewGameButton();
	
	/**
	 * Stop the draw() loop.
	 */
	noLoop();
}


/**
 * @description starts a new game.
 *
 * @param none.
 *
 * @return none.
 */
luckyDivisor.util.game.restart = function()
{
	// console.log("Called  Restart");
	luckyDivisor.global.player.init();
	
	/**
	 * Reset the previous column starting time tracker to undefined.
	 */
	luckyDivisor.global.previousColumnStartingDate = undefined;
	
	/**
	 * Empty all columns.
	 */
	luckyDivisor.global.columns = [];
	
	initialisePnCubeCreationRecord();
	
	luckyDivisor.global.numberOfPnCubeCreated = 0;
	
	luckyDivisor.util.game.startNewPlay();

	/**
	 * Bring back the draw() looping.
	 */
	loop();
}