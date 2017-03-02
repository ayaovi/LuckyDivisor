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
 
function Star(position, lengthOfArm)
{
	this.position = position;
	this.lengthOfArm = lengthOfArm;
	
	this.show = function()
	{
		// save current state.
		push();
		
		stroke(0);
		strokeWeight(4);
		
		translate(this.position.x, this.position.y);
		line(0, 0, 0, -this.lengthOfArm);
		
		rotate(TWO_PI / 5);
		line(0, 0, 0, -this.lengthOfArm);
		
		rotate(TWO_PI / 5);
		line(0, 0, 0, -this.lengthOfArm);

		rotate(TWO_PI / 5);
		line(0, 0, 0, -this.lengthOfArm);

		rotate(TWO_PI / 5);
		line(0, 0, 0, -this.lengthOfArm);

		// restore back to state previous.
		pop();
	}
}