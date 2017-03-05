/**
 * @file : cube.js
 *
 * @description : A Cube is simply a rectangle with a number inscribed on it.
 * and this number has to be prime and less than 10 except in the case of the player's cube.
 * As such a Cube is classified as either a PlayerCube or a PnCube (where Pn stands for prime number).
 * A PnCube starts its journey at the top of the canvas and falls downward whereas the PlayerCube is 
 * always a the bottom of the canvas and move sideways (i.e. LEFT and RIGHT).
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : 
 */

/**
 * @description Function constructor.
 *
 * @param none.
 *
 * @return none.
 */
function Cube(primeNumber, id, position)
{
	/**
	 * The following variable the number that appears on the cube. In the case 
	 * of a Pn cube, this number is always a non-zero prime less than 10. A 
	 * player cube on the other hand may have any number between 2 and 99.
	 */
	this.number = primeNumber;

	/**
	 * The id is a unique parameter to this cube. The id's start from 0. Where 
	 * an id 0 is always reserved to the player's cube.
	 */
	this.id = id;

	/**
	 * A cube requires a position for display on the canvas. The position tells 
	 * the coordinates of the cube at all time. It is implemented as a p5.js vector.
	 */
	this.position = position;

	/**
	 * The following is a variable that advises on the visibility of this Cube. This 
	 * is mostly useful when displaying the Cube on the canvas. As such a non 
	 * visible (i.e. this.visibility == false) will never be displayed on the canvas.
	 */
	this.visibility = true;

	/**
	 * The following simply keeps track for which Column this Cube belongs to. The 
	 * importance of this variable is apparent when we want to automatically start 
	 * a new Cube once the current has fallen off the canvas. The idea is to use 
	 * this variable to get the hosting column and initiate a new cube fall.
	 */
	this.hostingColumnIndex;

	/**
	 * The speed tells us how has this Cube is falling. One assumption made at the 
	 * design stage is that bigger Pn cubes are made of denser material and thus 
	 * fall faster than the smaller one (e.g. a Cube with Pn 5 will alway fall 
	 * faster than one with Pn 2). 
	 */
	this.speed = DEFAULT_PN_CUBE_SPEED + (PN_CUBE_SPEED_VARIANT_MULTIPLIER * primeNumber);
	
	/**
	 * The following variable is needed to confirm the identity of the Cube during 
	 * certain operations.
	 */
	// this.owner = (id == 0) ? "Player" : undefined;
	
	/**
	 * The following is only needed for player cubes. It is a collection all the 
	 * prime divisors of player cube's number.
	 */
	this.divisors = (id == 0) ? getPrimeFactors(this.number) : [];
	
	/**
	 * A colour is the colour in which the cube appears when displayed on the canvas 
	 * Every Pn Cube has a dedicated colour whereas a player cube's colour is a 
	 * combination of the colour of all its diviors.
	 */
	this.colour = (id == 0) ? combineColours(this.divisors) : CUBE_COLOUR_MAP[primeNumber];
	
	/**
	 * The following is a collection of numbers of pn Cube that have been collect are 
	 * divisors of the player cube number.
	 */
	this.alreadyCollectedDivisors = [];
	
	/**
	 * The following is a collection of numbers of pn Cube that are divisors of the 
	 * player's cube number but have not yet been collected.
	 */
	this.yetToBeCollectedDivisors = (id == 0) ? getPrimeFactors(this.number) : [];
	
	/**
	 * A confirmation on whether this cube is falling or not, reason why it is initially 
	 * set to false.
	 */
	// this.hasStarted = false;

	/**
	 * keeps a reccord of when this cube started falling.
	 */
	// this.startTime;

	/**
	 * @description a function that displays this Cube.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	this.show = function()
	{
		// stroke();
		if (this.id == 0)
		{
			if (keyIsDown(playerControls[0]))
			{
				// Move player's cube one unit to the left.
				this.position.x -= DEFAULT_PLAYER_CUBE_SPEED;
			}
			if (keyIsDown(playerControls[1]))
			{
				// Move player's cube one unit to the right.
				this.position.x += DEFAULT_PLAYER_CUBE_SPEED;
			}
			
			// Ensure the Player's Cube does not slide off the canvas.
			this.position.x = constrain(this.position.x, 1, WIDTH_OF_CANVAS - SIDE_OF_CUBE - 1);

			fill(this.colour);
			rect(this.position.x, this.position.y, SIDE_OF_CUBE, SIDE_OF_CUBE);	
			fill(0);
			//strokeWeight(2);
			textSize(DEFAULT_CUBE_NUMBER_TEXT_SIZE);
			var padding = (SIDE_OF_CUBE - textWidth(this.number)) / 2;
			text(this.number, this.position.x + padding, this.position.y + DEFAULT_CUBE_NUMBER_TEXT_SIZE + CUBE_NUMBER_PADDING);
		}
		else
		{
			if (this.visibility == true)
			{
				fill(this.colour);
				rect(this.position.x, this.position.y, SIDE_OF_CUBE, SIDE_OF_CUBE);
				fill(0);
				//strokeWeight(2);
				textSize(DEFAULT_CUBE_NUMBER_TEXT_SIZE);
				var padding = (SIDE_OF_CUBE - textWidth(this.number)) / 2;
				text(this.number, this.position.x + padding, this.position.y + DEFAULT_CUBE_NUMBER_TEXT_SIZE + CUBE_NUMBER_PADDING);
			}
		}
	}
	
	
	/**
	 * @description a function that makes this cube fall.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	this.fall = function()
	{
		this.position.y += this.speed;
		
		// Check whether the Cube has fallen off the canvas.
		if (this.position.y > HEIGHT_OF_CANVAS)
		{
			this.visibility = false;
		}

		// if (!this.hasStarted)
		// {
		// 	this.hasStarted = true;
		// }
		// else
		// {
		// 	// Check whether we are half way through.
		// 	if (this.position.y >= HEIGHT_OF_CANVAS / 2)
		// 	{
		// 		// Create an event for a new cube to fall after this one down the same coloumn.
		// 	}
		// }
	}
	

	/**
	 * @description a collision handler.
	 *
	 * @param a Pn cube.
	 *
	 * @return none.
	 */
	this.cameInContactWith = function(otherCube)
	{
		var pnCube;
		
		/**
		 * This method is only supposed to be called on a playerCube, however 
		 * we still need to make sure.
		 */
		if (this === playerCube)
		{
			pnCube = otherCube;
		}
		else if (otherCube === playerCube)
		{
			pnCube = this;
		}
		else 
		{
			// Neither Cubes is a player Cube.
			this.mergeWith(otherCube);
			return;
		}
		
		if (this.yetToBeCollectedDivisors.includes(pnCube.number))
		{
			// Move pnCube.number to the lot of alreadyCollectedDivisors.
			this.registerDivisorCollection(pnCube.number);
			
			// Change the colour of playerCube
			this.changeColour();
			
			// Update Player score.
			player.updateScore(pnCube.number);
			
			// Make pnCube invisible
			pnCube.visibility = false;
		}
		else if (this.alreadyCollectedDivisors.includes(pnCube.number))
		{
			// Do nothing for now to the playerCube
			
			// Make pnCube invisible
			pnCube.visibility = false;
		}
		else
		{
			// Burn the player for collecting a non-divisor cube
			player.burn();
			
			// Make pnCube invisible
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
	this.hasCollectedAll = function()
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
	this.registerDivisorCollection = function(divisor)
	{
		// Add this divisor to the list of already collected divisors
		this.alreadyCollectedDivisors.push(divisor);
		
		// Then remove this divisor from the list of divisor yet to be collected
		removeFromArray(this.yetToBeCollectedDivisors, divisor);
	}
	

	/**
	 * @description a function that cahnges the colour of of this Pn cube 
	 * according to prime numbers in the yetToBeCollectedDivisors array. This 
	 * is in response to the player collecting a prime divisor Pn cube.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	this.changeColour = function()
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