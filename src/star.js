/**
 * @file : star.js
 * @description : 
 * @author : Ayaovi Espoir Djissenou
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