/**
 * @file : column.js
 *
 * @description : 
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : 
 */
 
function Column(xCordinate)
{
	this.x = xCordinate;
	this.cubes = (floor(random(2)) > 0) ? [new Cube(random(primeNumbers), ++ID, createVector(this.x + DEFAULT_COLUMN_PADDING, 0))] : [];
	
	this.show = function()
	{
		for (var i = 0; i < this.cubes.length; i++)
		{
			this.cubes[i].fall();
			this.cubes[i].show();
		}
	}
}