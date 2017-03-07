/**
 * @file : sidepanel.js
 *
 * @description : A panel is more of a container to hold the player's 
 * life stars, a timer and the player's score.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

class SidePanel extends Panel
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
		 * A collection of player life stars.
		 */
		this.playerLifeStars;
		
		/**
		 * The list of pn cubes that the player needs to collect.
		 */
		this.pnCubesYetToBeCollected;
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
		this.position = createVector(WIDTH_OF_CANVAS, 0);
		this.width = WIDTH_OF_SIDE_PANEL;
		this.height = HEIGHT_OF_SIDE_PANEL;
		this.pnCubesYetToBeCollected = [];
		var divisors = playerCube.divisors;

		/**
		 * create the cubes to be collected objects.
		 */
		for (var i = 0; i < divisors.length; i++)
		{
			this.pnCubesYetToBeCollected.push(new PnCube(divisors[i], ++ID, 
				createVector(this.position.x + DEFAULT_SIDE_PANEL_PADDING, 
					DEFAULT_SIDE_PANEL_PADDING + i * (DEFAULT_SIDE_PANEL_PADDING + SIDE_OF_CUBE))));
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
		/**
		 * Save the current state.
		 */
		push();

		fill(255);
		noStroke();
		rect(this.position.x, this.position.y, this.width, this.height);

		/**
		 * Restore the previous state.
		 */
		pop();

		/**
		 * Display lis of cubes yet to be collect.
		 */
		for (var i = 0; i < this.pnCubesYetToBeCollected.length; i++) 
		{
			this.pnCubesYetToBeCollected[i].show();
		}
	}


	/**
	 * @description updates the list of yet to be collected pn cubes.
	 *
	 * @param 
	 *
	 * @return none.
	 */
	update(number)
	{
		/**
		 * Remove last pn cube with prime number the supplied number.
		 */
		removeCubeFromYetToBeCollecteList(this.pnCubesYetToBeCollected, number);
	}
}