/**
 * @file : pncube.js
 *
 * @description : A pn cube is a cube with special properties and features.
 * The number on a pn cube number has to be prime and less than 10. 
 * A PnCube starts its journey at the top of the canvas and falls downward until 
 * it falls off the game canvas where it become invisible.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : 
 */

class PnCube extends Cube
{
	/**
	 * @description 
	 *
	 * @param
	 *
	 * @return 
	 */
	constructor(primeNumber, id, position)
	{
		super(primeNumber, id, position);
		
		this.colour = CUBE_COLOUR_MAP[this.number];
		
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
		 * A confirmation on whether this cube is falling or not, reason why it is initially 
		 * set to false.
		 */
		// this.hasStarted = false;

		/**
		 * keeps a record of when this cube started falling.
		 */
		// this.startTime;
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
	
	
	/**
	 * @description a function that makes this cube fall.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	fall()
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
}