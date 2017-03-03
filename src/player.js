/**
 * @file : player.js
 *
 * @description : A Player object contains information about the game player.
 * This information ranges from the player name, score to player best score.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : 
 */

function Player()
{
	this.name = "PLAYER";
	this.score = 0;
	this.bestScore = 0;
	this.creditPoints = 0;
	// this.numberOfLifeStars = NUMBER_OF_PLAYER_STARTING_LIFE_STARS;
	
	/**
	 * @desciption A function to update the player score.
	 * @param a positive non-zero integer.
	 * @return none
	 */
	this.updateScore = function(hit)
	{
		if (hit > 0)
		{
			this.score += hit;
		}
		
		// Check whether player has collected all required divisors.
		if (this.hasCollectedAll())
		{
			// Then this mark the end of play.
			endPlay();
		}
	}
	
	
	/**
	 * A function that checks whether the player has collected all necessary cubes.
	 */
	this.hasCollectedAll = function()
	{
		return playerCube.hasCollectedAll();
	}
	
	
	/**
	 * A function that takes action when the player collects a cube that he is 
	 */
	this.burn = function()
	{
		panel.playerLifeStarsLocked = false;
		panel.takeOffAPlayerLifeStar();
		// console.log("Player burnt");
	}
}