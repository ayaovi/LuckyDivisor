/**
 * @file : main.js
 *
 * @description : 
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : 
 */

function setup()
{
	var gameCanvasContainer = document.getElementById('gameCanvasContainer');
	// displayWindow is a p5.js variable.
	gameCanvasContainer.style.left = (displayWidth - WIDTH_OF_GAME_FRAME) / 2 + 'px';
	// windowHeight is a p5.js variable.
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
	
	var playerCubeNumber = generatePlayerCubeNumber();
	console.log(playerCubeNumber);
	
	var playerCube = new Cube(playerCubeNumber, 0, createVector((WIDTH_OF_CANVAS - SIDE_OF_CUBE) / 2, HEIGHT_OF_CANVAS - SIDE_OF_CUBE - 1));
	gameCubes.push(playerCube);
	
	// var factors = getPrimeFactors(5);
	var factors = playerCube.divisors;
	for (var i = 0; i < factors.length; i++)
	{
		console.log(factors[i]);
	}
	
	panel = new Panel();
}

function draw()
{
	background(DEFAULT_CANVAS_BACKGROUND_COLOUR);
	
	for (var i = 0; i < gameCubes.length; i++)
	{
		gameCubes[i].show();
	}

	if (!panel.timer.isStarted)
	{
		panel.timer.start();
	}
	
	panel.show();

	if (panel.timer.stringTimeTillEndOfPlay == "00:00")
	{
		noLoop();
	}
}