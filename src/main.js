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
function initialiseCubeColourMap() {
	/**
	 * Initialise the map of colours.
	 * It was decided at the design stage to paint the pn cube in different colour in order 
	 * to make them visually distinguishable beside the number inscribed on them. As these 
	 * colour have been carefully chosen to avoid any misinterpretation.
	 */
	luckyDivisor.config.CUBE_COLOUR_MAP[1] = color('#FFED00');
	luckyDivisor.config.CUBE_COLOUR_MAP[2] = color('#FF0000');
	luckyDivisor.config.CUBE_COLOUR_MAP[3] = color('#0047AB');
	luckyDivisor.config.CUBE_COLOUR_MAP[5] = color('#00B500');
	luckyDivisor.config.CUBE_COLOUR_MAP[7] = color('#805B00');
}


/**
 * @description Initialises the cube colour map.
 *
 * @param none.
 *
 * @return none.
 */
function initialisePnCubeCreationRecord() {
	luckyDivisor.global.pnCubeCreationReccordMap[1] = 0;
	luckyDivisor.global.pnCubeCreationReccordMap[2] = 0;
	luckyDivisor.global.pnCubeCreationReccordMap[3] = 0;
	luckyDivisor.global.pnCubeCreationReccordMap[5] = 0;
	luckyDivisor.global.pnCubeCreationReccordMap[7] = 0;
}


/**
 * @description creates the game components (i.e. a Player, a Top Panel, a Side Panel etc...).
 *
 * @param none.
 *
 * @return none.
 */
function createGameComponents() {
	/**
	 * Create the new game button. This button will always be there, but just not shown.
	 */
	createNewGameButton();
	
	/**
	 * Create the Player object.
	 */
	luckyDivisor.global.player = new Player();
	luckyDivisor.global.player.init();
	
	/**
	 * Create the top panel.
	 */
	luckyDivisor.global.topPanel = new TopPanel();
	luckyDivisor.global.topPanel.init();

	/**
	 * A SidePanl is a requirement.
	 */
	luckyDivisor.global.sidePanel = new SidePanel();
	// luckyDivisor.global.sidePanel.init();

	/**
	 * We also need an EventQueue.
	 */
	luckyDivisor.global.eventQueue = new EventQueue();
}


/**
 * @description creates a new game button.
 *
 * @param none.
 *
 * @return none.
 */
function createNewGameButton() {
	var x = (luckyDivisor.config.WIDTH_OF_CANVAS - luckyDivisor.config.WIDTH_OF_BUTTON) / 2;
	var y = (luckyDivisor.config.HEIGHT_OF_CANVAS / 2) + 100;
	
	luckyDivisor.global.newGameButton = new Button("NEW GAME", createVector(x, y), luckyDivisor.config.WIDTH_OF_BUTTON, luckyDivisor.config.HEIGHT_OF_BUTTON, luckyDivisor.util.game.restart);
}


/**
 * @description Initialises the dimensions of the container in the HTML file.
 *
 * @param none.
 *
 * @return none.
 */
function initialiseHTMLContainer() {
	/**
	 * displayWindow and windowHeight are p5.js variables.
	 */
	var gameCanvasContainer = document.getElementById('gameCanvasContainer');
	gameCanvasContainer.style.left = (displayWidth - luckyDivisor.config.WIDTH_OF_GAME_FRAME) / 2 + 'px';
	gameCanvasContainer.style.top = (windowHeight - luckyDivisor.config.HEIGHT_OF_GAME_FRAME) / 2 + 'px';
}


/**
 * @description required by p5.js to operate properly.
 *
 * @param none.
 *
 * @return none.
 */
function preload() {
	try {
		/**
		 * First check that the image file is accessible.
		 * I have had so much issue with Cross Origin Request Policy in Google chrome.
		 * I have looked around time and again and this seems to the simplest solution 
		 * without requiring the user to manually allow cross origin sharing on the browser.
		 * The good news is, should the applicaion be executed through a simple web server 
		 * all of this is not needed.
		 * The way it is now, when running locally without a webserver, the game canvas 
		 * background would be set to a dark gray colour. But with a web server, the 
		 * background is set to a grayscal image of the Milky Way.
		 */
		var http = new XMLHttpRequest();

	    http.open('HEAD', luckyDivisor.config.DEFAULT_CANVAS_BACKGROUND_IMAGE, false);
	    http.send();

	    if (http.status != 404) {
			luckyDivisor.global.img = loadImage(luckyDivisor.config.DEFAULT_CANVAS_BACKGROUND_IMAGE);

			/**
			 * We will use this variable later to decided whether to load an image for the background or a plain dark gray colour.
			 */
			luckyDivisor.global.imageAvailable = true;
		}
	}
	catch (err) {
		luckyDivisor.global.imageAvailable = false;
	}
}



/**
 * @description required by p5.js to operate properly.
 *
 * @param none.
 *
 * @return none.
 */
function setup() {
	initialiseHTMLContainer();

	var gameCanvas = createCanvas(luckyDivisor.config.WIDTH_OF_GAME_FRAME, luckyDivisor.config.HEIGHT_OF_CANVAS);
	
	/**
	 * This is important for the canvas to be displayed at the right location.
	 */
	gameCanvas.parent('gameCanvasContainer');
	
	initialiseCubeColourMap();
	
	initialisePnCubeCreationRecord();

	luckyDivisor.util.initPlayerData();

	createGameComponents();

	luckyDivisor.config.gameStatus = "Running";

	luckyDivisor.util.game.startNewPlay();	
}



/**
 * @description displays the game components on-screen.
 *
 * @param none.
 *
 * @return none.
 */
function showGameComponents() {
	/**
	 * Display the player cube at the bottom of the canvas.
	 */
	luckyDivisor.global.playerCube.show();
	
	/**
	 * Then display all columns.
	 */
	luckyDivisor.global.columns.forEach(function (column) {
		column.show();
	});

	/**
	 * Then check whether the player has collected any pn cube.
	 */
	checkForPnCubeCollection();

	/**
	 * Display the top panel.
	 */
	luckyDivisor.global.topPanel.show();

	/**
	 * Finally display the side panel.
	 */
	luckyDivisor.global.sidePanel.show();
}



/**
 * @description checks whether the player has collected a Pn Cube.
 *
 * @param none.
 *
 * @return none.
 */
function checkForPnCubeCollection() {
	/**
	 * The simplest way to go about this is going through very column and checking whether every cube in that column is colliding with the player cube.
	 */
	luckyDivisor.global.columns.forEach(function (column) {
		column.cubes.forEach(function (cube) {
			/**
			 * Create new references for the sake of simplicity.
			 */
			var x1 = cube.position.x;
			var y1 = cube.position.y;
			var x2 = luckyDivisor.global.playerCube.position.x;
			var y2 = luckyDivisor.global.playerCube.position.y;
			var w = luckyDivisor.config.SIDE_OF_CUBE;
			
			if (cube.visibility && collideRectRect(x1, y1, w, w, x2, y2, w, w)) {
				console.log("Seems player collected a pn cube.");
				luckyDivisor.global.playerCube.collisionHandler.handleCollisionWith(cube);
				cube.visibility = false;
			}
		});
	});
}


/**
 * @description makes sure the game is ended when a time out occurs.
 *
 * @param none.
 *
 * @return none.
 */
function checkForTimeOut() {
	/**
	 * The game is ended (i.e. game over) if the clock reaches "00:00".
	 */
	if (luckyDivisor.global.topPanel.clock.stringTimeTillEndOfPlay == "00:00") {
		/**
		 * End the game with code 1 (i.e. TIME OUT).
		 */
		luckyDivisor.util.game.endGame(1);
	}
}


/**
 * @description makes sure the clock is started.
 *
 * @param none.
 *
 * @return none.
 */
function checkForRunningClock() {
	/**
	 * Start the clock if it not started.
	 */
	if (!luckyDivisor.global.topPanel.clock.hasStarted) {
		luckyDivisor.global.topPanel.clock.start();
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
function checkAndProcessNextEvent() {
	/**
	 * Check whether there is any current event sitting in the event queue.
	 */
	if (luckyDivisor.global.eventQueue.hasEvents()) {
		/**
		 * The next to be fired event would be the one in front of the queue.
		 */
		var nextToBeFiredEvent = luckyDivisor.global.eventQueue.peek();
		
		/**
		 * Should the event time be same as the system time.
		 */
		if (nextToBeFiredEvent.date.isLessOrEqualTo(luckyDivisor.util.date.getCurrentDate())) {
			/**
			 * Then process the event.
			 */
			nextToBeFiredEvent.process();
			
			/**
			 * Delete the event once it has been processed.
			 */
			luckyDivisor.global.eventQueue.remove(0);
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
function checkIfGamePaused() {
	if (luckyDivisor.config.gameStatus == "Paused") {
		luckyDivisor.util.game.displayMessageOnCanvas("PAUSED");
	}
}



/**
 * @description sets the canvas background as an image or a plain dark gray colour.
 *
 * @param none.
 *
 * @return none.
 */
drawCanvasBackground = function () {
	if (luckyDivisor.global.imageAvailable) {
		image(luckyDivisor.global.img, 0, 0, width, height);
	}
	else {
		background(luckyDivisor.config.DEFAULT_CANVAS_BACKGROUND_COLOUR);
	}
}



/**
 * @description required by p5.js to operate properly.
 *
 * @param none.
 *
 * @return none.
 */
function draw() {
	drawCanvasBackground();
	checkForRunningClock();
	showGameComponents();
	checkForPnCubeCollection();
	checkAndProcessNextEvent();
	checkForTimeOut();
	checkIfGamePaused();
}