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

        if (http.status !== 404) {
            luckyDivisor.global.img = loadImage(luckyDivisor.config.DEFAULT_CANVAS_BACKGROUND_IMAGE);

            /**
             * We will use this variable later to decided whether to load an image for the background or a plain dark gray colour.
             */
            luckyDivisor.global.imageAvailable = true;
        }
    } catch (err) {
        luckyDivisor.global.imageAvailable = false;
    }
}



/**
 * @description a mouse click handler.
 *
 * @param none.
 *
 * @return none.
 */
function mouseClicked() {
    if (luckyDivisor.global.newGameButton !== undefined) {
        luckyDivisor.global.newGameButton.mouseClick(mouseX, mouseY);
    }
}



/**
 * @description this function is called once every time a key is pressed. The keyCode for the key that was pressed is stored in the keyCode variable. (this description is taken from https://p5js.org/reference/#/p5/keyPressed).
 *
 * @param none.
 *
 * @return none.
 */
function keyPressed() {
    if (luckyDivisor.global.gameStatus !== "Running") {
        return;
    }

    if (!luckyDivisor.defines.DEBUG) {
        luckyDivisor.global.keyMap[keyCode] = true;
    }

    /**
     * Check whether the key pressed is SPACE_BAR
     */
    if (luckyDivisor.global.keyMap[32]) {
        /**
         * If so, pause or play the game.
         */
        luckyDivisor.global.keyMap[32] = false;
        luckyDivisor.util.game.pauseOrPlay();
    } else if (luckyDivisor.global.keyMap[17] && luckyDivisor.global.keyMap[90]) {
        /**
         * If possible, take us back to previous world.
         */
        luckyDivisor.global.keyMap[17] = false;
        luckyDivisor.global.keyMap[90] = false;
        var worlds = luckyDivisor.global.worlds;
        var currentWorld = luckyDivisor.global.currentWorld;
        var lastWorldIndex = worlds.length - 1;

        if (lastWorldIndex >= 0) {
            var currentClock = luckyDivisor.global.currentWorld.topPanel.clock;

            /**
             * Set the current world back to the one before it.
             */
            luckyDivisor.global.currentWorld = worlds[lastWorldIndex].clone();
            luckyDivisor.global.currentWorld.topPanel.clock = currentClock;

            /**
             * The remove that world from the list of worlds.
             */
            // worlds.splice(lastWorldIndex, 1);
        }
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
    luckyDivisor.util.initialiseHTMLContainer();

    var gameCanvas = createCanvas(luckyDivisor.config.WIDTH_OF_GAME_FRAME, luckyDivisor.config.HEIGHT_OF_CANVAS);

    /**
     * This is important for the canvas to be displayed at the right location.
     */
    gameCanvas.parent('gameCanvasContainer');

    luckyDivisor.util.initialiseCubeColourMap();
    luckyDivisor.util.initialisePnCubeCreationRecord();
    luckyDivisor.util.initPlayerData();
    luckyDivisor.util.createGameComponents();
    luckyDivisor.config.gameStatus = "Running";
    luckyDivisor.global.numberOfPlay = 0;
    luckyDivisor.util.game.startNewPlay();
}



/**
 * @description required by p5.js to operate properly.
 *
 * @param none.
 *
 * @return none.
 */
function draw() {
    if (!luckyDivisor.defines.DEBUG) {
        luckyDivisor.util.drawCanvasBackground();
    }

    luckyDivisor.util.checkForRunningClock(luckyDivisor.global.currentWorld);

    if (!luckyDivisor.defines.DEBUG) {
        luckyDivisor.util.showGameComponents(luckyDivisor.global.currentWorld);
        luckyDivisor.util.checkForPnCubeCollection(luckyDivisor.global.currentWorld);
    }

    try {
        luckyDivisor.util.checkAndProcessNextEvent(luckyDivisor.global.currentWorld.eventQueue);
    } catch (exception) {
        alert(exception.message);
    }

    luckyDivisor.util.checkForTimeOut(luckyDivisor.global.currentWorld.topPanel.clock);
    luckyDivisor.util.checkIfGamePaused();

    if (luckyDivisor.util.timeToSaveNewHistory(luckyDivisor.global.currentWorld.topPanel.clock)) {
        luckyDivisor.util.saveCurrentWorld(luckyDivisor.global.worlds, luckyDivisor.global.currentWorld);
    }
}