/**
 * @file : main.js
 *
 * @description : This is the main file where the magic happens :).
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

// var intialTime;
// var paused;
var smileyFace;
var angryFace;

/**
 * @description required by p5.js to operate properly.
 *
 * @param none.
 *
 * @return none.
 */
function setup()
{
	// paused = false;
	// // var date = new Date("October 13, 2014 11:13:00");
	// var date = new Date(12345);
	// intialTime = date.getTime();

	// console.log("Initial Time is: " + date);

	createCanvas(400, 400)

	smileyFace = new Emoticon(createVector(200, 150), 50, 0);
	angryFace = new Emoticon(createVector(200, 250), 50, 1);
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
	// var date = new Date();

	// console.log("Time difference is: " + (date.getTime() - intialTime));

	background(100);

	smileyFace.show();
	angryFace.show();
}


// function mousePressed() 
// {
// 	if (!paused)
// 	{
// 		paused = true;
// 		noLoop();
// 	}
// 	else
// 	{
// 		loop();
// 	}
// }