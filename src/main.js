/**
 * @file : main.js
 *
 * @description : This is the main file where the magic happens :).
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


var flameImages = [];
var fireballImages = [];
var flame;
var fireball;


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
            flameImages[0] = loadImage("../assets/flame_1/flame_a_0001.png");
            flameImages[1] = loadImage("../assets/flame_1/flame_a_0002.png");
            flameImages[2] = loadImage("../assets/flame_1/flame_a_0003.png");
            flameImages[3] = loadImage("../assets/flame_1/flame_a_0004.png");
            flameImages[4] = loadImage("../assets/flame_1/flame_a_0005.png");
            flameImages[5] = loadImage("../assets/flame_1/flame_a_0006.png");

            fireballImages[0] = loadImage("../assets/fireball/01.png");
            fireballImages[1] = loadImage("../assets/fireball/02.png");
            fireballImages[2] = loadImage("../assets/fireball/03.png");
            fireballImages[3] = loadImage("../assets/fireball/04.png");
            fireballImages[4] = loadImage("../assets/fireball/05.png");
            fireballImages[5] = loadImage("../assets/fireball/06.png");

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

    flame = new Flame(createVector(0, 0), flameImages, 30, 35, 5);
    fireball = new Flame(createVector(50, 0), fireballImages, 40, 45, 7);
}



/**
 * @description required by p5.js to operate properly.
 *
 * @param none.
 *
 * @return none.
 */
function draw() {
    background(125);
    flame.show();
    fireball.show();
}