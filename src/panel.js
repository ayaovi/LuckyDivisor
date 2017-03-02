/**
 * @file : panel.js
 *
 * @description : A panel is more of a container to hold the player's 
 * life stars, a timer and the player's score.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : 
 */

function Panel()
{
	this.position = createVector(0, 0);
	this.width = WIDTH_OF_CANVAS;
	this.height = HEIGHT_TOP_PANEL;
	this.colour = color('white');
	this.playerLifeStars = [];
	this.timer = new Timer();
	this.playerLifeStarsLocked = true;
	// this.star = 
	
	for (var i = 0; i < NUMBER_OF_PLAYER_STARTING_LIFE_STARS; i++)
	{
		this.playerLifeStars.push(new Star(createVector(this.position.x + i * SIZE_OF_A_PLAYER_STAR + 
			PLAYER_STARS_STARTING_POSITION, this.position.y + this.height / 2), this.height / 4));
	}
	
	this.show = function()
	{
		fill(255);
		// noStroke();
		rect(this.position.x, this.position.y, this.width - 1, this.height);
		// this.star.show();
		this.timer.show();
		for (var i = 0; i < this.playerLifeStars.length; i++) 
		{
			this.playerLifeStars[i].show();
		}
	}
	
	this.takeOffAPlayerLifeStar = function()
	{
		if (!this.playerLifeStarsLocked)
		{
			this.playerLifeStars.splice(this.playerLifeStars.length - 1, 1);
		}
		this.playerLifeStarsLocked = true;
	}
}