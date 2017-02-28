/**
 * @file : main.js
 * @description : 
 * @author : Ayaovi Espoir Djissenou
 * @version : 
 */

function setup()
{
	// console.log("Height of screen is : " + windowHeight);
	var gameCanvasContainer = document.getElementById('gameCanvasContainer');
	gameCanvasContainer.style.left = (displayWidth - WIDTH_OF_GAME_FRAME) / 2 + 'px'; /* displayWidth is a p5 variable. */
	gameCanvasContainer.style.top = (windowHeight - HEIGHT_OF_GAME_FRAME) / 2 + 'px';

	// Initialise the map of colours.
	// CUBE_COLOUR_MAP[1] = color('#F8CECC');
	CUBE_COLOUR_MAP[1] = color('#FFED00');
	// CUBE_COLOUR_MAP[2] = color('#D5E8D4');
	CUBE_COLOUR_MAP[2] = color('#FF0000');
	// CUBE_COLOUR_MAP[3] = color('#E1D5E7');
	CUBE_COLOUR_MAP[3] = color('#0047AB');
	// CUBE_COLOUR_MAP[5] = color('#DAE8FC');
	CUBE_COLOUR_MAP[5] = color('#00B500');
	// CUBE_COLOUR_MAP[7] = color('#FFFF88');
	CUBE_COLOUR_MAP[7] = color('#805B00');

	var gameCanvas = createCanvas(WIDTH_OF_CANVAS, HEIGHT_OF_CANVAS);
	gameCanvas.parent('gameCanvasContainer');
	
	var playerCube = new Cube(10, 0, createVector((WIDTH_OF_CANVAS - SIDE_OF_CUBE) / 2, HEIGHT_OF_CANVAS - SIDE_OF_CUBE - 1))
	gameCubes.push(playerCube);
	
	// var primeDivisors = getPrimeDivisors(playerCube.number);

	// for (var i = 0; i < primeDivisors.length; i++) 
	// {
	// 	console.log(primeDivisors[i]);
	// }

	var combinedColour = combineColours(getPrimeDivisors(playerCube.number));
	// var combinedColour = addRGBs(CUBE_COLOUR_MAP[1], CUBE_COLOUR_MAP[5]);
	// var combinedColour = addRGBs(color('red'), color('blue'));

	// for (var i = 0; i < combinedColour.length; i++) 
	// {
	// 	console.log(combinedColour[i]);
	// }

	playerCube.colour = color(combinedColour[0], combinedColour[1], combinedColour[2]);
	// playerCube.colour = CUBE_COLOUR_MAP[1];
}

function draw()
{
	background(DEFAULT_CANVAS_BACKGROUND_COLOUR);
	
	for (var i = 0; i < gameCubes.length; i++)
	{
		gameCubes[i].show();
	}
}