/**
 * @file : missingfunctions.js
 *
 * @description : When writing the tests, for some reason the functions 
 * of p5.js that I have been using cannot be found. So I needed to redefine 
 * my own versions so QUnit could be happy. I think it may be a clash with the qunit librairy.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

var abs = function(number) {
	return Math.abs(number);
}

var floor = function(number) {
	return Math.floor(number);
}

var createVector = function(xValue, yValue) {
	return {
		x : xValue,
		y : yValue
	}
}

var color = function(r, g, b) {
	return rgb(r, g, b);
}

var random = function(upper) {
	Math.random(upper);
}

var push = function() {
	/**
	 * Empty for now. Do not think I would really need it for testing purposes.
	 */
}

var pop = function() {
	/**
	 * Empty for now. Do not think I would really need it for testing purposes.
	 */
}