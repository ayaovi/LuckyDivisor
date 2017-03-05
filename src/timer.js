/**
 * @file : timer.js
 *
 * @description : A Star represent the ability of the player to continue 
 * playing the game. In other words, The player has a number of life stars 
 * to start with and once they run out, the game is over for the player.
 * It is also possible for the player to win some life stars back . 
 * However, there is a maximum number of life stars that a player can 
 * have; and beyond that, even game plays that qualify for the winning of 
 * a life star will not result in the acquisition of a life star.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : 
 */


/**
 * @description Function constructor.
 *
 * @param none.
 *
 * @return none.
 */
function Timer(position)
{
	/**
	 * The position of the timer as a vector with coordinates (x, y).
	 */
	this.position = createVector(0, 0);
	
	/**
	 * The minute at which this timer has started.
	 */
	this.minute;
	
	/**
	 * The second at which this timer has started.
	 */
	this.seconds;
	
	/**
	 * Confirmation that the timer has started or not.
	 */
	this.isStarted = false;
	
	/**
	 * A string representation of the time till the end of current play.
	 * Displayed as minute:second.
	 */
	this.stringTimeTillEndOfPlay;


	/**
	 * @description a timer intialiser.
	 *
	 * @param none.
	 *
	 * @return return.
	 */
	this.init = function()
	{
		this.minute = minute();
		this.second = second();
		this.stringTimeTillEndOfPlay = padWithZero(defaultPlayDuration[0]) + 
				":" + padWithZero(defaultPlayDuration[1]);
	}


	/**
	 * @description A start event handler.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	this.start = function()
	{
		this.init();
		this.isStarted = true;
		this.stringTimeTillEndOfPlay = getStringTimeTillEndOfPlay(this.minute, this.second, minute(), second());
	}

	/**
	 * @description A reset event handler.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	this.reset = function()
	{
		if (isStarted)
		{
			this.init();
			this.isStarted = false;
		}
	}

	
	/**
	 * @decsription Responsible for displaying this timer.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	this.show = function()
	{
		// save current state.
		push();

		// // First create a black circle.
		// fill(0);
		// ellipse(this.position.x, this.position.y, this.width);

		// // Then create a white arc on the circle.
		// fill(255);
		// arc(this.position.x, this.position.y, this.width, this.width, -HALF_PI, -HALF_PI/3);
		this.stringTimeTillEndOfPlay = getStringTimeTillEndOfPlay(this.minute, this.second, minute(), second());	
		fill(0);
		textSize(DEFAULT_TIMER_TEXT_SIZE);
		text(this.stringTimeTillEndOfPlay, this.position.x + DEFAULT_TIMER_PADDING, this.position.y + DEFAULT_TIMER_TEXT_SIZE);

		// restore back to state previous.
		pop();
	}
}