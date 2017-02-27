function Cube(primeNumber, id, position)
{
	this.number = primeNumber;
	this.id = id;
	this.position = position;
	this.visibility = true;
	this.speed = DEFAULT_SPEED + (SPEED_VARIANT_MULTIPLIER * primeNumber);
	this.owner = (id == 0)? "Player" : undefined;
	//this.colour = CUBE_COLOUR_MAP.get(primeNumber);
	this.colour = color('#F8CECC');
	this.divisors = [];
	this.alreadyCollectedDivisors = [];
	this.yetToBeCollectedDivisors = [];
	
	// A function that displays this Cube.
	this.show = function()
	{
		if (this.visibility == true)
		{
			fill(this.colour);
			rect(this.position.x + DEFAULT_COLUMN_PADDING, this.position.y, SIDE_OF_CUBE, SIDE_OF_CUBE);
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