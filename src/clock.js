/**
 * @file : clock.js
 *
 * @description : 
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


class Clock
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
		 * The duration of a play.
		 */
		this.playDuration;
		
		/**
		 * Confirmation that the timer has started or not.
		 */
		this.hasStarted;
		
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
		this.hasStarted = false;
		this.position = createVector(0, 0);
		this.playDuration = new Time(defaultPlayDuration[0], defaultPlayDuration[1]);
		this.stringTimeTillEndOfPlay = this.playDuration.toString();
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
		/**
		 * When the clock is called up to start, we set the hasStarted variable to true.
		 */
		this.hasStarted = true;
		this.time = new Time(minute(), second());
		this.stringTimeTillEndOfPlay = this.time.plus(this.playDuration).minus(getCurrentTime()).toString();
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
		if (this.hasStarted)
		{
			this.init();
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
		if (this.hasStarted)
		{
			this.stringTimeTillEndOfPlay = this.time.plus(this.playDuration).minus(getCurrentTime()).toString();
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