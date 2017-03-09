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
 * @version : v1
 */


class Timer
{
	/**
	 * @description constructor.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	constructor()
	{
		/**
		 * The position of the timer as a vector with coordinates (x, y).
		 */
		this.position;
		
		/**
		 * The time at which this timer has started.
		 */
		this.time;
		
		/**
		 * Confirmation that the timer has started or not.
		 */
		this.isStarted;
		
		/**
		 * A string representation of the time till the end of current play.
		 * Displayed as minute:second.
		 */
		this.stringTimeTillEndOfPlay;
	}
	
	/**
	 * @description a timer initialiser.
	 *
	 * @param none.
	 *
	 * @return return.
	 */
	init()
	{
		this.isStarted = false;
		this.position = createVector(0, 0);
		this.time = new Time(minute(), second());
		this.stringTimeTillEndOfPlay = padWithZero(defaultPlayDuration[0]) + ":" + padWithZero(defaultPlayDuration[1]);
	}


	/**
	 * @description A start event handler.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	start()
	{
		// this.init();
		this.isStarted = true;
		this.stringTimeTillEndOfPlay = getStringTimeTillEndOfPlay(this.time.minute, this.time.second, minute(), second());
	}

	/**
	 * @description A reset event handler.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	reset()
	{
		if (this.isStarted)
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
	show()
	{
		/**
		 * save current state.
		 */
		push();

		/**
		 * Before updating time till end of play, check that the clock has indeed been started.
		 */
		if (this.isStarted)
		{
			this.stringTimeTillEndOfPlay = getStringTimeTillEndOfPlay(this.time.minute, this.time.second, minute(), second());
		}
		
		fill(0);
		textSize(DEFAULT_TIMER_TEXT_SIZE);
		text(this.stringTimeTillEndOfPlay, this.position.x + DEFAULT_TIMER_PADDING, this.position.y + DEFAULT_TIMER_TEXT_SIZE);

		/**
		 * restore back to state previous.
		 */
		pop();
	}
}