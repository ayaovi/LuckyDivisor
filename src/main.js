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
 * @description Initialises the cube colour map.
 *
 * @param none.
 *
 * @return none.
 */
function initialiseCubeColourMap()
{
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
}


/**
 * @description Initialises the cube colour map.
 *
 * @param none.
 *
 * @return none.
 */
function initialisePnCubeCreationRecord()
{
	pnCubeCreationReccordMap[1] = 0;
	pnCubeCreationReccordMap[2] = 0;
	pnCubeCreationReccordMap[3] = 0;
	pnCubeCreationReccordMap[5] = 0;
	pnCubeCreationReccordMap[7] = 0;
}


/**
 * @description creates the game components (i.e. a Player, a Top Panel, a Side Panel etc...).
 *
 * @param none.
 *
 * @return none.
 */
function createGameComponents()
{
	/**
	 * Create the new game button. This button will always be there, but just not shown.
	 */
	createNewGameButton();
	
	/**
	 * Create the Player object.
	 */
	player = new Player();
	player.init();
	
	/**
	 * Create the top panel.
	 */
	topPanel = new TopPanel();
	topPanel.init();

	/**
	 * A SidePanl is a requirement.
	 */
	sidePanel = new SidePanel();
	sidePanel.init();

	/**
	 * We also need an EventQueue.
	 */
	eventQueue = new EventQueue();
}


/**
 * @description creates a new game button.
 *
 * @param none.
 *
 * @return none.
 */
function createNewGameButton()
{
	var x = (WIDTH_OF_CANVAS - WIDTH_OF_BUTTON) / 2;
	var y = (HEIGHT_OF_CANVAS / 2) + 100;
	
	newGameButton = new Button("NEW GAME", createVector(x, y), WIDTH_OF_BUTTON, HEIGHT_OF_BUTTON, restart);
}


/**
 * @description Initialises the dimensions of the container in the HTML file.
 *
 * @param none.
 *
 * @return none.
 */
function initialiseHTMLContainer()
{
	/**
	 * displayWindow and windowHeight are p5.js variables.
	 */
	var gameCanvasContainer = document.getElementById('gameCanvasContainer');
	gameCanvasContainer.style.left = (displayWidth - WIDTH_OF_GAME_FRAME) / 2 + 'px';
	gameCanvasContainer.style.top = (windowHeight - HEIGHT_OF_GAME_FRAME) / 2 + 'px';
}


/**
 * @description required by p5.js to operate properly.
 *
 * @param none.
 *
 * @return none.
 */
function setup()
{
	initialiseHTMLContainer();

	var gameCanvas = createCanvas(WIDTH_OF_GAME_FRAME, HEIGHT_OF_CANVAS);
	
	/**
	 * This is important for the canvas to be displayed at the right location.
	 */
	gameCanvas.parent('gameCanvasContainer');
	
	initialiseCubeColourMap();
	
	initialisePnCubeCreationRecord();

	createGameComponents();

	gameStatus = "Running";

	startNewPlay();	
}



/**
 * @description displays the game components on-screen.
 *
 * @param none.
 *
 * @return none.
 */
function showGameComponents()
{
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
	checkForPnCubeCollection();

	/**
	 * Display the top panel.
	 */
	topPanel.show();

	/**
	 * Finally display the side panel.
	 */
	sidePanel.show();
}



/**
 * @description checks whether the player has collected a Pn Cube.
 *
 * @param none.
 *
 * @return none.
 */
function checkForPnCubeCollection()
{
	for (var i = 0; i < columns.length; i++)
	{
		for (var j = 0; j < columns[i].cubes.length; j++)
		{
			/**
			 * Create new references for the sake of simplicity.
			 */
			var pnCube = columns[i].cubes[j];
			var x1 = pnCube.position.x;
			var y1 = pnCube.position.y;
			var x2 = playerCube.position.x;
			var y2 = playerCube.position.y;
			var w = SIDE_OF_CUBE;
			
			if (pnCube.visibility && collideRectRect(x1, y1, w, w, x2, y2, w, w))
			{
				playerCube.contactHandler.handleCollisionWith(pnCube);
				pnCube.visibility = false;
			}
		}
	}
}


/**
 * @description makes sure the game is ended when a time out occurs.
 *
 * @param none.
 *
 * @return none.
 */
function checkForTimeOut()
{
	/**
	 * The game is ended (i.e. game over) if the clock reaches "00:00".
	 */
	if (topPanel.clock.stringTimeTillEndOfPlay == "00:00")
	{
		/**
		 * End the game with code 1 (i.e. TIME OUT).
		 */
		endGame(1);
	}
}


/**
 * @description makes sure the clock is started.
 *
 * @param none.
 *
 * @return none.
 */
function checkForRunningClock()
{
	/**
	 * Start the clock if it not started.
	 */
	if (!topPanel.clock.hasStarted)
	{
		topPanel.clock.start();
	}
}


/**
 * @description check whether there is an event scheduled to be executed at this time.
 * If so it executes it
 *
 * @param none.
 *
 * @return none.
 */
function checkAndProcessNextEvent()
{
	/**
	 * Check whether there is any current event sitting in the event queue.
	 */
	if (eventQueue.hasEvents())
	{
		/**
		 * The next to be fired event would be the one in front of the queue.
		 */
		var nextToBeFiredEvent = eventQueue.peek();
		
		/**
		 * Should the event time be same as the system time.
		 */
		if (nextToBeFiredEvent.date.isLessOrEqualTo(getCurrentDate()))
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


/**
 * @description check whether the game is paused, and if so, it displays a pause message on the canvas.
 *
 * @param none.
 *
 * @return none.
 */
function checkIfGamePaused()
{
	if (gameStatus == "Paused")
	{
		displayMessageOnCanvas("PAUSED");
	}
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

	checkForRunningClock();
	showGameComponents();
	checkForPnCubeCollection();
	checkAndProcessNextEvent();
	checkForTimeOut();
	checkIfGamePaused();
}