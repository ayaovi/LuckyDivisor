/**
 * @file : panel.js
 * @description : A panel is more of a container to hold the player's 
 * life stars, a timer and the player's score.
 * @author : Ayaovi Espoir Djissenou
 * @version : 
 */

function Panel(position, width, height)
{
	this.position = position;
	this.width = width;
	this.height = height;
	this.colour = color('white');
	this.playerLifeStars = [];
	
	for (var i = 0; i < NUMBER_OF_PLAYER_STARTING_LIFE_STARS; i++)
	{
		// this.playerLifeStars.push(new Star());
	}
	
	this.show = function()
	{
		fill(255);
		// noStroke();
		rect(this.position.x, this.position.y, this.width - 1, this.height);
	}
}