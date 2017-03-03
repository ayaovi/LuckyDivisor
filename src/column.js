/**
 * @file : column.js
 *
 * @description : a Column is a tube or a line that Cubes are falling off.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : 
 */
 
function Column(xCordinate)
{
	this.x = xCordinate;
	this.cubes = (floor(random(2)) > 0) ? [new Cube(random(primeNumbers), ++ID, createVector(this.x + DEFAULT_COLUMN_PADDING, 0))] : [];
	

	/**
	 * @description displays the content of this column.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	this.show = function()
	{
		for (var i = 0; i < this.cubes.length; i++)
		{
			this.cubes[i].fall();
			this.cubes[i].show();
		}
	}
}