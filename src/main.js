/**
 * @file : main.js
 *
 * @description : 
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : 
 */

 
// function preload() 
// {
	// img = loadImage(DEFAULT_CANVAS_BACKGROUND_IMAGE);
// }


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
	
	// image(img, 0, 0);
	
	startPlay();
	
	player = new Player();
	panel = new Panel();
	panel.init();
}

function draw()
{
	background(DEFAULT_CANVAS_BACKGROUND_COLOUR);
	
	playerCube.show();
	
	for (var i = 0; i < columns.length; i++)
	{
		columns[i].show();
	}
	
	for (var i = 0; i < columns.length; i++)
	{
		for (var j = 0; j < columns[i].cubes.length; j++)
		{
			var pnCube = columns[i].cubes[j];
			var x1 = pnCube.position.x;
			var y1 = pnCube.position.y;
			var x2 = playerCube.position.x;
			var y2 = playerCube.position.y;
			var w = SIDE_OF_CUBE;
			
			if (pnCube.visibility && collideRectRect(x1, y1, w, w, x2, y2, w, w))
			{
				// console.log("HIT");
				playerCube.cameInContactWith(pnCube);
				pnCube.visibility = false;
			}
		}
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
	
	// console.log("Player score is " + player.score);
}