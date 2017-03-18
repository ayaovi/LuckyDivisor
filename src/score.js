/**
 * @file : score.js
 *
 * @description : A score is more of a container to hold the player's 
 * life stars, a timer and the player's score.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */
 
class Score
{
	/**
	 * @description 
	 *
	 * @param
	 *
	 * @return 
	 */
	constructor(position)
	{
		this.position = position;
		this.score = 0;
	}
	
	
	/**
	 * @description updates the player score.
	 *
	 * @param the value by which to update the score.
	 *
	 * @return none.
	 */
	update(hit)
	{
		/**
		 * So far this score updater only accepts positive hits.
		 * Could we also introduce a negative hit as a penalty for collecting an already collected factor?
		 */
		if (hit > 0)
		{
			this.score += hit;
		}
	}
	
	
	/**
	 * @description displays the the score on the top pane.
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
		 * We want to print the score in black.
		 */
		fill(0);
		
		/**
		 * The size of the score text has a default value set in config.js.
		 */
		textSize(luckyDivisor.config.DEFAULT_SCORE_TEXT_SIZE);
		text(this.score, this.position.x + luckyDivisor.config.DEFAULT_SCORE_PADDING, this.position.y + luckyDivisor.config.DEFAULT_SCORE_TEXT_SIZE);

		/**
		 * restore back to state previous.
		 */
		pop();
	}
}