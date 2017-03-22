/**
 * @file : playercubetests.js
 *
 * @description : some tests on the Event object.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("player cube basics", function( assert ) {
	var playerCube = new PlayerCube(10, 0, createVector(20, 770));
	
	assert.ok(event.date.equals(eventDate), "upon creation event.date equal eventDate succeeds");
});