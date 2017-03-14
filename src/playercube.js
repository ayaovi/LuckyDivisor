/**
 * @file : playercube.js
 *
 * @description : A player cube is a cube with special properties and features.
 * The number on a player cube is not restricted to be just a prime. In fact it could be anything 
 * between 2-99 provided it has prime factors that are less than 10. A Player Cube is 
 * always a the bottom of the canvas and move sideways (i.e. LEFT and RIGHT).
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

 
 class PlayerCube extends Cube
 {
	/**
	 * @description 
	 *
	 * @param 
	 *
	 * @return 
	 */
	constructor(number, id, position)
	{
		super(number, id, position);
		
		/**
		 * The following is only needed for player cubes. It is a collection all the 
		 * prime divisors of player cube's number.
		 */
		this.divisors = getPrimeFactors(this.number);
		
		/**
		 * The player cube's colour is a combination in equal proportion of all its prime 
		 * divisors colours.
		 */
		this.colour = combineColours(this.divisors);
		
		/**
		 * The following is a collection of numbers of pn Cube that have been collect are 
		 * divisors of the player cube number.
		 */
		this.alreadyCollectedDivisors = [];
		
		/**
		 * The following is a collection of numbers of pn Cube that are divisors of the 
		 * player's cube number but have not yet been collected.
		 */
		this.yetToBeCollectedDivisors = getPrimeFactors(this.number);
	}
	
	
	/**
	 * @description a function that displays this Cube.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	show()
	{
		if (keyIsDown(playerControls[0]))
		{
			/**
			 * Move player's cube one unit to the left.
			 */
			this.position.x -= DEFAULT_PLAYER_CUBE_SPEED;
		}
		if (keyIsDown(playerControls[1]))
		{
			/**
			 * Move player's cube one unit to the right.
			 */
			this.position.x += DEFAULT_PLAYER_CUBE_SPEED;
		}
		
		/**
		 * Ensure the Player's Cube does not slide off the canvas.
		 */
		this.position.x = constrain(this.position.x, 1, WIDTH_OF_CANVAS - SIDE_OF_CUBE - 1);

		fill(this.colour);
		rect(this.position.x, this.position.y, SIDE_OF_CUBE, SIDE_OF_CUBE);	
		
		fill(0);
		textSize(DEFAULT_CUBE_NUMBER_TEXT_SIZE);
		var x = this.position.x + (SIDE_OF_CUBE - textWidth(this.number)) / 2;
		var y = this.position.y + DEFAULT_CUBE_NUMBER_TEXT_SIZE + CUBE_NUMBER_PADDING;
		text(this.number, x, y);
	}
	
	
	/**
	 * @description a collision handler.
	 *
	 * @param a Pn cube.
	 *
	 * @return none.
	 */
	cameInContactWith(pnCube)
	{		
		if (this.yetToBeCollectedDivisors.includes(pnCube.number))
		{
			/**
			 * Move pnCube.number to the lot of alreadyCollectedDivisors.
			 */
			this.registerDivisorCollection(pnCube.number);
			
			/**
			 * Change the colour of playerCube.
			 */
			this.changeColour();
			
			/**
			 * Update side panel.
			 */
			sidePanel.update(pnCube.number);
			
			/**
			 * Update Player score.
			 */
			player.updateScore(pnCube.number);
			
			/**
			 * Make pnCube invisible.
			 */
			pnCube.visibility = false;
		}
		else if (this.alreadyCollectedDivisors.includes(pnCube.number))
		{
			// Do nothing for now to the playerCube.
			
			/**
			 * Make pnCube invisible.
			 */
			pnCube.visibility = false;
		}
		else
		{
			/**
			 * Burn the player for collecting a non-divisor cube
			 */
			player.burn();
			
			/**
			 * Make pnCube invisible.
			 */
			pnCube.visibility = false;
		}
	}
	
	
	/**
	 * @description A function that checks whether the player has collected all necessary cubes.
	 *
	 * @param none.
	 *
	 * @return true or false.
	 */
	hasCollectedAll()
	{
		return (this.yetToBeCollectedDivisors.length == 0);
	}
	
	/**
	 * @description a function.
	 *
	 * @param a non-zero prime number less than 10.
	 *
	 * @return none.
	 */
	registerDivisorCollection(divisor)
	{
		/**
		 * Add this divisor to the list of already collected divisors.
		 */
		this.alreadyCollectedDivisors.push(divisor);
		
		/**
		 * Then remove this divisor from the list of divisor yet to be collected.
		 */
		removeFromArray(this.yetToBeCollectedDivisors, divisor);
	}
	
	
	/**
	 * @description a function that changes the colour of of this Pn cube 
	 * according to prime numbers in the yetToBeCollectedDivisors array. This 
	 * is in response to the player collecting a prime divisor Pn cube.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	changeColour()
	{
		if (this.yetToBeCollectedDivisors.length == 0)
		{
			this.colour = color('white');
		}
		else if (this.yetToBeCollectedDivisors.length == 1)
		{
			this.colour = CUBE_COLOUR_MAP[this.yetToBeCollectedDivisors[0]];
		}
		else
		{
			this.colour = combineColours(this.yetToBeCollectedDivisors);
		}
	}
 }