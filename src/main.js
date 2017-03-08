/**
 * @file : main.js
 *
 * @description : This is the main file where the magic happens :).
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


/**
 * @description required by p5.js to operate properly.
 *
 * @param none.
 *
 * @return none.
 */
function setup()
{
	var gameCanvasContainer = document.getElementById('gameCanvasContainer');
	// displayWindow is a p5.js variable.
	gameCanvasContainer.style.left = (displayWidth - WIDTH_OF_GAME_FRAME) / 2 + 'px';
	// windowHeight is a p5.js variable.
	gameCanvasContainer.style.top = (windowHeight - HEIGHT_OF_GAME_FRAME) / 2 + 'px';

	/**
	 * Initialise the map of colours.
	 * It was decided at the design stage to paint the pn cube in different colour in order 
	 * to make them visually distinguishable beside the number inscribed on them. As these 
	 * colour have been carefully chosen to avoid any misinterpretation.
	 */
	CUBE_COLOUR_MAP[1] = color('#FFED00');
	CUBE_COLOUR_MAP[2] = color('#FF0000');
	CUBE_COLOUR_MAP[3] = color('#0047AB');
	CUBE_COLOUR_MAP[5] = color('#00B500');
	CUBE_COLOUR_MAP[7] = color('#805B00');

	var gameCanvas = createCanvas(WIDTH_OF_GAME_FRAME, HEIGHT_OF_CANVAS);
	gameCanvas.parent('gameCanvasContainer');

	startPlay();
	
	player = new Player();

	topPanel = new TopPanel();
	topPanel.init();

	sidePanel = new SidePanel();
	sidePanel.init();
}


/**
 * @description required by p5.js to operate properly.
 *
 * @param none.
 *
 * @return none.
 */
function draw()
{
	background(DEFAULT_CANVAS_BACKGROUND_COLOUR);
	
	/**
	 * Display the player cube at the bottom of the canvas.
	 */
	playerCube.show();
	
	/**
	 * Then display all columns.
	 */
	for (var i = 0; i < columns.length; i++)
	{
		columns[i].show();
	}
	
	/**
	 * Then check whether the player has collected any pn cube.
	 */
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
				playerCube.cameInContactWith(pnCube);
				pnCube.visibility = false;
			}
		}
	}
	
	/**
	 * Start the clock if it not started.
	 */
	if (!topPanel.timer.isStarted)
	{
		topPanel.timer.start();
	}
	
	/**
	 * Display the top panel.
	 */
	topPanel.show();

	/**
	 * The game is ended (i.e. game over) if the clock reaches "00:00".
	 */
	if (topPanel.timer.stringTimeTillEndOfPlay == "00:00")
	{
		noLoop();
	}

	/**
	 * Finally display the side panel.
	 */
	sidePanel.show();
	
	/**
	 * Check whether there is any current event sitting in the event queue.
	 */
	if (eventQueue.hasEvents())
	{
		/**
		 * The next to be fired event would be the one in front of the queue.
		 */
		var nextToBeFiredEvent = eventQueue.getFront();
		
		/**
		 * Should the event time be same as the system time.
		 */
		if (nextToBeFiredEvent.time.isLessOrEqualTo(getCurrentTime()))
		{
			/**
			 * Then process the event.
			 */
			nextToBeFiredEvent.process();
			
			/**
			 * Delete the event once it has been processed.
			 */
			eventQueue.remove(0);
		}
	}
}