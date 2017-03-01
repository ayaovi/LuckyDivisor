/**
 * @file : star.js
 * @description : 
 * @author : Ayaovi Espoir Djissenou
 * @version : 
 */
 
function Star(postion, lengthOfArm)
{
	this.position = position;
	this.lengthOfArm = lengthOfArm;
	
	this.show = function()
	{
		stroke(0);
		strokeWidth(2);
		translate(this.position.x, this.position.y);
		line(0, 0, 0, -this.lengthOfArm);
	}
}