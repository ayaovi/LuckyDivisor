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


var slider;

/**
 * @description required by p5.js to operate properly.
 *
 * @param none.
 *
 * @return none.
 */
function setup() {
    /**
     * https://www.youtube.com/watch?v=z86cx2A4_3E
     * https://www.youtube.com/watch?v=ksRoh-10lak
     */
    luckyDivisor.util.initialiseHTMLContainer();

    var gameCanvas = createCanvas(luckyDivisor.config.WIDTH_OF_GAME_FRAME, luckyDivisor.config.HEIGHT_OF_CANVAS);

    /**
     * This is important for the canvas to be displayed at the right location.
     */
    gameCanvas.parent('gameCanvasContainer');
    slider = createSlider(0, 10, 2, 0.01);
}

function sgn(value) {
    if (value > 0) {
        return 1;
    }
    else if (value < 0) {
        return -1;
    }
    else {
        return 0;
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
    background(100);

    translate(width/2, height/2);
    // var radius = 100;
    var a = 100;
    var b = 100;
    var n = slider.value();
    stroke(255);
    noFill();

    beginShape();
    for (var angle = 0; angle < TWO_PI; angle += 0.1) {
        var na = 2 / n;
        // var x = radius * cos(angle);
        var x = pow(abs(cos(angle)), na) * a * sgn(cos(angle));
        // var y = radius * sin(angle);
        var y = pow(abs(sin(angle)), na) * b * sgn(sin(angle));
        vertex(x, y);
    }
    endShape(CLOSE);
}