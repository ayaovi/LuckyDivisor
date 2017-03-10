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
		this.playerLifeStars = player.playerLifeStars;
		this.timer = new Timer();
		this.timer.init();
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
}