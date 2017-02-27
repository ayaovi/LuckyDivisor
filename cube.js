/**
 * @file : cube.js
 * @description : 
 * @author : Ayaovi Espoir Djissenou
 * @version : 
 */


function Cube(primeNumber, id, position)
{
	this.number = primeNumber;
	this.id = id;
	this.position = position;
	this.visibility = true;
	this.speed = DEFAULT_PN_CUBE_SPEED + (PN_CUBE_SPEED_VARIANT_MULTIPLIER * primeNumber);
	this.owner = (id == 0) ? "Player" : undefined;
	this.colour = (id == 0) ? color(255) : CUBE_COLOUR_MAP[primeNumber];
	this.divisors = [];
	this.alreadyCollectedDivisors = [];
	this.yetToBeCollectedDivisors = [];
	
	// A function that displays this Cube.
	this.show = function()
	{
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
		}
		else
		{
			if (this.visibility == true)
			{
				fill(this.colour);
				rect(this.position.x + DEFAULT_COLUMN_PADDING, this.position.y, SIDE_OF_CUBE, SIDE_OF_CUBE);
			}
		}
	}
	
	// A function that makes this cube fall.
	this.fall = function()
	{
		this.position.y += this.speed;
		
		// Check whether the Cube has fallen off the canvas.
		if (this.position.y > HEIGHT_OF_CANVAS)
		{
			this.visibility = false;
		}
	}
}