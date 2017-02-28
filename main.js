/**
 * @file : main.js
 * @description : 
 * @author : Ayaovi Espoir Djissenou
 * @version : 
 */

function setup()
{
	var gameCanvasContainer = document.getElementById('gameCanvasContainer');
	gameCanvasContainer.style.left = (screen.width - WIDTH_OF_GAME_FRAME) / 2 + 'px';

	// var sidePanelContainer = document.getElementById('sidePanelContainer');
	// sidePanelContainer.style.left = (gameCanvasContainer.style.left + WIDTH_OF_CANVAS) + 'px';
	// sidePanelContainer.style.background = 'red';
	
	// Initialise the map of colours.
	CUBE_COLOUR_MAP[1] = color('#F8CECC');
	CUBE_COLOUR_MAP[2] = color('#D5E8D4');
	CUBE_COLOUR_MAP[3] = color('#E1D5E7');
	CUBE_COLOUR_MAP[5] = color('#DAE8FC');
	CUBE_COLOUR_MAP[7] = color('#FFFF88');

	var gameCanvas = createCanvas(WIDTH_OF_CANVAS, HEIGHT_OF_CANVAS);
	gameCanvas.parent('gameCanvasContainer');
	
	gameCubes.push(new Cube(20, 0, createVector((WIDTH_OF_CANVAS - SIDE_OF_CUBE) / 2, HEIGHT_OF_CANVAS - SIDE_OF_CUBE - 1)));
}

function draw()
{
	background(DEFAULT_CANVAS_BACKGROUND_COLOUR);
	
	for (var i = 0; i < gameCubes.length; i++)
	{
		gameCubes[i].show();
	}
}