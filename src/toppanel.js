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
		// super();

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
		this.playerLifeStarsLocked = true;

		/**
		 * create the player life stars objects.
		 */
		for (var i = 0; i < NUMBER_OF_PLAYER_STARTING_LIFE_STARS; i++)
		{
			this.playerLifeStars.push(new Star(createVector(this.position.x + i * SIZE_OF_A_PLAYER_STAR + 
				PLAYER_STARS_STARTING_POSITION, this.position.y + this.height / 2), this.height / 4));
		}
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
		if (!this.playerLifeStarsLocked)
		{
			this.playerLifeStars.splice(this.playerLifeStars.length - 1, 1);
		}
		this.playerLifeStarsLocked = true;
	}
}