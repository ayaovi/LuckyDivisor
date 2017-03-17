/**
 * @file : cube.js
 *
 * @description : A Cube is simply a rectangle with a number inscribed on it.
 * 
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

 
class Cube
{
	/**
	 * @description Function constructor.
	 *
	 * @param a prime number to be displayed on the cube, an id that is unique to the cube 
	 * and a position that relates to where the cube is at any point in time.
	 *
	 * @return none.
	 */
	constructor(number, id, position)
	{
		/**
		 * The following variable the number that appears on the cube. In the case 
		 * of a Pn cube, this number is always a non-zero prime less than 10. A 
		 * player cube on the other hand may have any number between 2 and 99.
		 */
		this.number = number;

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
		 * The speed tells us how has this Cube is falling. One assumption made at the 
		 * design stage is that bigger Pn cubes are made of denser material and thus 
		 * fall faster than the smaller one (e.g. a Cube with Pn 5 will always fall 
		 * faster than one with Pn 2). 
		 */
		this.speed = DEFAULT_PN_CUBE_SPEED + (PN_CUBE_SPEED_VARIANT_MULTIPLIER * number);
		
		/**
		 * A colour is the colour in which the cube appears when displayed on the canvas 
		 * Every Pn Cube has a dedicated colour whereas a player cube's colour is a 
		 * combination of the colour of all its divisors.
		 */
		this.colour;
	}
	
	
	/**
	 * @description displays a square on the canvas at the specified position.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	showSquare()
	{
		fill(this.colour);
		rect(this.position.x, this.position.y, SIDE_OF_CUBE, SIDE_OF_CUBE);
	}
	
	
	/**
	 * @description displays a text on the square that represents the cube.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	showNumberOnCube()
	{
		fill(0);
		textSize(DEFAULT_CUBE_NUMBER_TEXT_SIZE);
		var x = this.position.x + (SIDE_OF_CUBE - textWidth(this.number)) / 2;
		var y = this.position.y + DEFAULT_CUBE_NUMBER_TEXT_SIZE + CUBE_NUMBER_PADDING;
		text(this.number, x, y);
	}
	
	
	/**
	 * @description Tests equality of two cubes. By checking the equality of their numbers.
	 *
	 * @param another cube.
	 *
	  @return true or false.
	 */
	equals(otherCube)
	{
		return (this.number == otherCube.number);
	}
}