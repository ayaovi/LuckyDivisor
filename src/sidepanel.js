/**
 * @file : sidepanel.js
 *
 * @description : A side panel is a panel that contains the list of yet to be collected Pn cubes by the player.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

class SidePanel extends Panel {
	/**
	 * @description constructor.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	constuctor() {
		/**
		 * A collection of player life stars.
		 */
		this.playerLifeStars;
		
		/**
		 * The list of pn cubes that the player needs to collect.
		 */
		this.pnCubesYetToBeCollected;

		/**
		 * A map of pn cube number and the number of instances to be collected. Theoretically it 
		 * can map every prime factor in the game to a number of occurrence. We can get meticulous 
		 * by only mapping the prime factors that the player is required to collect during every 
		 * play. But I opted for the former. As such this map would initially look like the following:
		 * {
		 *	1 --> 0
		 *	2 --> 0
		 *	3 --> 0
		 *	5 --> 0
		 *	7 --> 0
		 * }
		 */
		this.numberOfPnCubesYetToBeCollected;
	}

	/**
	 * @description an initialiser of the panel.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	init() {
		this.position = createVector(luckyDivisor.config.WIDTH_OF_CANVAS, 0);
		this.width = luckyDivisor.config.WIDTH_OF_SIDE_PANEL;
		this.height = luckyDivisor.config.HEIGHT_OF_SIDE_PANEL;
	}


	/**
	 * @description resets all the necessary stuff.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	reset() {
		this.pnCubesYetToBeCollected = [];
		
		this.numberOfPnCubesYetToBeCollected = {};
		this.numberOfPnCubesYetToBeCollected[1] = 0;
		this.numberOfPnCubesYetToBeCollected[2] = 0;
		this.numberOfPnCubesYetToBeCollected[3] = 0;
		this.numberOfPnCubesYetToBeCollected[5] = 0;
		this.numberOfPnCubesYetToBeCollected[7] = 0;
		
		/**
		 * List of prime factor divisors of the player cube's number. Bear in mind it may well contain duplicate.
		 * And this is done on purpose; to allow us to simple delete a divisor once its pn cube has been collected 
		 * and not keep track of how many times it is supposed to be collected. An example would be, given a player 
		 * number 9, its divisors would be {1, 3, 3}.
		 */
		var primeFactors = luckyDivisor.global.playerCube.divisors;
		
		/**
		 * This is used to keep track of how much offset is needed to be added to the cube y-coordinate.
		 */
		var counter = 0;

		/**
		 * create the cubes to be collected objects.
		 */
		for (var i = 0; i < primeFactors.length; i++) {
			if (this.numberOfPnCubesYetToBeCollected[primeFactors[i]] == 0) {
				/**
				 * The cube to displayed in the side panel needs to be offset a little bit as to not be too close to the game canvas.
				 */
				var cubePositionX = this.position.x + luckyDivisor.config.DEFAULT_SIDE_PANEL_PADDING;
				
				/**
				 * The cubes are aligned vertically and spaced by the DEFAULT_SIDE_PANEL_PADDING.
				 */
				var cubePositionY = luckyDivisor.config.DEFAULT_SIDE_PANEL_PADDING + counter * (luckyDivisor.config.DEFAULT_SIDE_PANEL_PADDING + luckyDivisor.config.SIDE_OF_CUBE);
				
				this.pnCubesYetToBeCollected.push(new PnCube(primeFactors[i], ++luckyDivisor.config.ID, createVector(cubePositionX, cubePositionY)));
				
				/**
				 * Increment counter to cater for next cube to be displayed/printed.
				 */
				++counter;
			}
			
			/**
			 * Record the new occurrence of the cube to be collected.
			 */
			++this.numberOfPnCubesYetToBeCollected[primeFactors[i]];
		}
	}


	/**
	 * @description a function to display the content of this Panel.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	show() {
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
		 * Display list of cubes yet to be collect.
		 */
		for (var i = 0; i < this.pnCubesYetToBeCollected.length; i++) {
			/**
			 * A local reference to the pn cube for the sake of not having to type out 
			 * this.pnCubesYetToBeCollected[i] every time.
			 */
			var cube = this.pnCubesYetToBeCollected[i];
			
			/**
			 * A local reference to the number of time still a pn cube has be collected.
			 */
			var numberOfOccurence = this.numberOfPnCubesYetToBeCollected[cube.number];
			
			if (numberOfOccurence > 0) {
				cube.show();
				text("x" + numberOfOccurence, cube.position.x + luckyDivisor.config.DEFAULT_PADDING_OF_CUBE_OCCURENCE_IN_SIDE_PANEL, cube.position.y + luckyDivisor.config.SIDE_OF_CUBE * 0.75);
			}
		}
	}


	/**
	 * @description updates the list of yet to be collected pn cubes.
	 *
	 * @param a prime number of a pn cube that has just been collected.
	 *
	 * @return none.
	 */
	update(number) {
		/**
		 * When updating the list of cubes to be collected we can just decrement its number of occurrences.
		 * Following this approach, the cube object still lives in pnCubesYetToBeCollected collection until 
		 * next reset. We can be anal about this and delete the object itself but I chose not to do that.
		 */
		--this.numberOfPnCubesYetToBeCollected[number];
	}
}