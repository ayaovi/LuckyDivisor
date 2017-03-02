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
	 * A function to update the player score.
	 */
	this.updateScore = function(hit)
	{
		if (hit > 0)
		{
			this.score += hit;
		}
		
		// Check whether player has collected all required divisors.
		if (this.score == playerCube.number)
		{
			// Then this mark the end of play.
			endPlay();
		}
	}
	
	this.burn = function()
	{
		panel.playerLifeStarsLocked = false;
		panel.takeOffAPlayerLifeStar();
		console.log("Player burnt");
	}
}