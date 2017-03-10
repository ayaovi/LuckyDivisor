/**
 * @file : toppanel.js
 *
 * @description : A panel is more of a container to hold the player's 
 * life stars, a timer and the player's score.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

class TopPanel extends Panel
{
	/**
	 * @description constructor.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	constuctor()
	{
		/**
		 * I thought about calling super() here. In fact I did, but the browser was 
		 * complaining. I think it might be because the panel constructor takes no 
		 * argument. As such I took it out, and it is still working properly.
		 */

		/**
		 * A collection of player life stars.
		 */
		this.playerLifeStars;
		
		/**
		 * The timer to appear on the panel.
		 */
		this.timer;
		
		/**
		 * A lock on the access of player life stars. This lock prevents the 
		 * removal of more than one life stars when a player is burnt.
		 */
		this.playerLifeStarsLocked;

		/**
		 * Keeps track of the x-coordinate of the next player star.
		 */
		this.nextPlayerStarPositionX;
	}

	/**
	 * @description an initialiser of the panel.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	init()
	{
		this.position = createVector(0, 0);
		this.width = WIDTH_OF_CANVAS;
		this.height = HEIGHT_TOP_PANEL;
		this.playerLifeStars = [];
		this.timer = new Timer();
		this.timer.init();
		this.playerLifeStarsLocked = true;
		this.nextPlayerStarPositionX = this.position.x + PLAYER_STARS_STARTING_POSITION;

		/**
		 * create the player life stars objects.
		 */
		for (var i = 0; i < NUMBER_OF_PLAYER_STARTING_LIFE_STARS; i++)
		{
			/**
			 * New references for the sake of simplicity.
			 */
			var starPositionX = this.nextPlayerStarPositionX;
			var starPositionY = this.position.y + this.height / 2;
			var starPosition = createVector(starPositionX, starPositionY);
			var starArmLength = this.height / 4;

			this.playerLifeStars.push(new Star(starPosition, starArmLength));

			/**
			 * Update next player life star coordinate.
			 */
			this.nextPlayerStarPositionX += SIZE_OF_A_PLAYER_STAR;
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
			var starPositionX = this.nextPlayerStarPositionX;
			var starPositionY = this.position.y + this.height / 2;
			var starPosition = createVector(starPositionX, starPositionY);
			var starArmLength = this.height / 4;
			
			this.playerLifeStars.push(new Star(starPosition, starArmLength));
		}
	}

	/**
	 * @description resets anything that need be reset.
	 * So far it seems to be just the clock.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	reset()
	{
		this.timer.reset();
	}


	/**
	 * @description a function to display the content of this Panel.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	start()
	{
		this.timer.start();
	}

	/**
	 * @description a function to display the content of this Panel.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	show()
	{
		fill(255);
		rect(this.position.x, this.position.y, this.width - 1, this.height);
		
		/**
		 * Display clock. 
		 */
		this.timer.show();
		
		/**
		 * Followed by player score.
		 */
		player.score.show();
		
		/**
		 * And finally player life stars.
		 */
		for (var i = 0; i < this.playerLifeStars.length; i++) 
		{
			this.playerLifeStars[i].show();
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