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

        if (http.status != 404) {
            luckyDivisor.global.img = loadImage("../assets/flame.png");

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

    imagePosition = createVector(30, 0);
    scale = 1;
    switchInterval = floor(random(8, 12));
    count = 0;
}


var imagePosition;
var scale;
var switchInterval;
var count;


/**
 * @description required by p5.js to operate properly.
 *
 * @param none.
 *
 * @return none.
 */
function draw() {
    background(125);

    imagePosition.add(createVector(0, 5));

    if (imagePosition.y < height) {
        var nx = 40;
        var ny = 40 * scale;

        if (imagePosition.y % this.switchInterval == 0) {
            ++count;
            scale = 1 + (count % 2) * 0.4;
        }
        
        image(luckyDivisor.global.img, imagePosition.x - (nx / 2), imagePosition.y - ny, nx, ny);
    }
    else {
        imagePosition = createVector(30, 0);
        count = 0;
    }    
}