/**
 * @file : star.js
 *
 * @description : A Star represent the ability of the player to continue 
 * playing the game. In other words, The player has a number of life stars 
 * to start with and once they run out, the game is over for the player.
 * It is also possible for the player to win some life stars back . 
 * However, there is a maximum number of life stars that a player can 
 * have; and beyond that, even game plays that qualify for the winning of 
 * a life star will not result in the acquisition of a life star.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : 
 */


/**
 * @description a constructor.
 *
 * @param none.
 *
 * @return none.
 */
function Star(position, lengthOfArm)
{
	/**
	 * The position of this star.
	 */
	this.position = position;
	
	/**
	 * The star is displayed as a star. And this varaiable makes allusion to 
	 * the length of the arm or the star.
	 */
	this.lengthOfArm = lengthOfArm;
	

	/**
	 * @description displays the this player star.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	this.show = function()
	{
		/**
		 * save current state.
		 */
		push();
		
		stroke(0);
		strokeWeight(4);
		
		/**
		 * first arm.
		 */
		translate(this.position.x, this.position.y);
		line(0, 0, 0, -this.lengthOfArm);
		
		/**
		 * second arm.
		 */
		rotate(TWO_PI / 5);
		line(0, 0, 0, -this.lengthOfArm);
		
		/**
		 * third arm.
		 */
		rotate(TWO_PI / 5);
		line(0, 0, 0, -this.lengthOfArm);

		/**
		 * fourth arm.
		 */
		rotate(TWO_PI / 5);
		line(0, 0, 0, -this.lengthOfArm);

		/**
		 * fith arm.
		 */
		rotate(TWO_PI / 5);
		line(0, 0, 0, -this.lengthOfArm);

		/**
		 * restore back to state previous.
		 */
		pop();
	}
}