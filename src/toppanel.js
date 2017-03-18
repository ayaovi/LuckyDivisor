/**
 * @file : toppanel.js
 *
 * @description : A panel is more of a container to hold the player's 
 * life stars, a clock and the player's score.
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
		 * The clock to appear on the panel.
		 */
		this.clock;
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
		this.width = luckyDivisor.config.WIDTH_OF_CANVAS;
		this.height = luckyDivisor.config.HEIGHT_TOP_PANEL;
		this.clock = new Clock();
		this.clock.init();
	}


	/**
	 * @description resets anything that need be reset. So far it seems to be just the clock.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	reset()
	{
		this.clock.reset();
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
		this.clock.show();
		
		/**
		 * Followed by player score.
		 */
		player.score.show();
		
		/**
		 * And finally player life stars.
		 */
		for (var i = 0; i < player.playerLifeStars.length; i++) 
		{
			luckyDivisor.config.player.playerLifeStars[i].show();
		}
	}
}