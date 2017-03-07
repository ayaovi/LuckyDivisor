/**
 * @file : player.js
 *
 * @description : A Player object contains information about the game player.
 * This information ranges from the player name, score to player best score.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

 
class Player
{
	/**
	 * @desciption a constructor
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	constructor()
	{
		/**
		 * The name of the player. Ultimately a record of the players would be 
		 * kept. That way a player be simply be required to login (if necessary).
		 */
		this.name = "PLAYER";
		
		/**
		 * The score of the player so far.
		 */
		this.score = new Score(createVector(DEFAULT_SCORE_STARTING_POSITION, 0));
		
		/**
		 * The player's best score so far.
		 */
		this.bestScore = 0;
		
		/**
		 * The player's credit point so far.
		 */
		this.creditPoints = 0;
		// this.numberOfLifeStars = NUMBER_OF_PLAYER_STARTING_LIFE_STARS;
	}
	
	/**
	 * @desciption A function to update the player score.
	 *
	 * @param a positive non-zero integer.
	 *
	 * @return none
	 */
	updateScore(hit)
	{
		this.score.update(hit);
		
		// Check whether player has collected all required divisors.
		if (player.hasCollectedAll())
		{
			// Then this mark the end of play.
			endPlay();
		}
	}
	
	
	/**
	 * @description A function that checks whether the player has collected all necessary cubes.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	hasCollectedAll()
	{
		return playerCube.hasCollectedAll();
	}
	
	
	/**
	 * @description A function that takes action when the player collects a cube that he is.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	burn()
	{
		panel.playerLifeStarsLocked = false;
		panel.takeOffAPlayerLifeStar();
		// console.log("Player burnt");
	}
}