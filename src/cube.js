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
 * Function constructor.
 */
function Cube(primeNumber, id, position)
{
	this.number = primeNumber;
	this.id = id;
	this.position = position;
	this.visibility = true;
	this.column;
	this.speed = DEFAULT_PN_CUBE_SPEED + (PN_CUBE_SPEED_VARIANT_MULTIPLIER * primeNumber);
	this.owner = (id == 0) ? "Player" : undefined;
	this.divisors = (id == 0) ? getPrimeFactors(this.number) : [];
	// this.colour = (id == 0) ? color(255) : CUBE_COLOUR_MAP[primeNumber];
	this.colour = (id == 0) ? combineColours(this.divisors) : CUBE_COLOUR_MAP[primeNumber];
	this.alreadyCollectedDivisors = [];
	this.yetToBeCollectedDivisors = (id == 0) ? getPrimeFactors(this.number) : [];
	
	
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
		if (this.owner == "Player")
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
		
		// This method is only supposed to be called on a playerCube, however we still need to make sure.
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