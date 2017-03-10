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
		 * A collection of player life stars.
		 */
		this.playerLifeStars;
		
		/**
		 * Keeps track of the x-coordinate of the next player star.
		 */
		this.nextPlayerStarPositionX;
		
		/**
		 * A lock on the access of player life stars. This lock prevents the 
		 * removal of more than one life stars when a player is burnt.
		 */
		this.playerLifeStarsLocked;
		
		/**
		 * The player's best score so far.
		 */
		this.bestScore = 0;
		
		/**
		 * The player's credit point so far.
		 */
		this.creditPoints = 0;
	}
	
	
	/**
	 * @description an initialiser of the player.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	init()
	{
		this.playerLifeStars = [];
		this.nextPlayerStarPositionX = PLAYER_STARS_STARTING_POSITION;
		this.playerLifeStarsLocked = true;

		/**
		 * create the player life stars objects.
		 */
		for (var i = 0; i < NUMBER_OF_PLAYER_STARTING_LIFE_STARS; i++)
		{
			/**
			 * Add a new life star.
			 */
			this.addNewLifeStar();
		}
	}
	
	/**
	 * @desciption adds a new life stars to the life stars collection.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	addNewLifeStar()
	{
		if (this.playerLifeStars.length < NUMBER_OF_PLAYER_STARTING_LIFE_STARS)
		{
			/**
			 * New references for the sake of simplicity.
			 */
			var starPositionX = this.nextPlayerStarPositionX;
			var starPositionY = HEIGHT_TOP_PANEL / 2;
			var starPosition = createVector(starPositionX, starPositionY);
			var starArmLength = HEIGHT_TOP_PANEL / 4;

			this.playerLifeStars.push(new Star(starPosition, starArmLength));

			/**
			 * Update next player life star coordinate.
			 */
			this.nextPlayerStarPositionX += SIZE_OF_A_PLAYER_STAR;
		}
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
		/**
		 * Update the player score.
		 */
		this.score.update(hit);
		
		/**
		 * Check whether player has collected all required divisors.
		 */
		if (player.hasCollectedAll())
		{
			/**
			 * Then this mark the end of play.
			 */
			endCurrentPlay();
		}
	}
	
	
	/**
	 * @description gives a one life stars reward to the player if he does not
	 * already possess the maximum amount.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	rewardLifeStar()
	{
		if (this.playerLifeStars.length < NUMBER_OF_PLAYER_STARTING_LIFE_STARS)
		{
			/**
			 * Add a life star.
			 */
			this.addNewLifeStar();
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
		/**
		 * Unlock the player life stars in the top panel. This allow for a life stars to be taken off.
		 */
		this.playerLifeStarsLocked = false;
		
		/**
		 * Only thereafter can we take off a player life star.
		 */
		this.takeOffAPlayerLifeStar();
		
		/**
		 * Check if player has no more life stars.
		 */
		this.checkIfGameOver();
	}
	
	
	/**
	 * @desciption check whether the player is Game Over by running out of life stars.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	checkIfGameOver()
	{
		if (this.playerLifeStars.length == 0)
		{
			/**
			 * The player is indeed Game Over.
			 */
			endGame(0);
		}
	}
	
	/**
	 * @description a function that takes off a player life star 
	 * in response to him or her collecting a Pn cube they are not supposed to.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	takeOffAPlayerLifeStar()
	{
		/**
		 * We can only take away a player life star if it is not locked.
		 */
		if (!this.playerLifeStarsLocked)
		{
			this.playerLifeStars.splice(this.playerLifeStars.length - 1, 1);

			/**
			 * Put the lock on the player life stars back on.
			 */
			this.playerLifeStarsLocked = true;

			/**
			 * Update next player life star coordinate.
			 */
			this.nextPlayerStarPositionX -= SIZE_OF_A_PLAYER_STAR;
		}
	}
}