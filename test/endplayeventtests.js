/**
 * @file : endplayeventtests.js
 *
 * @description : some tests on the Event object.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("end play event basics", function( assert ) {
	var event = new EndPlayEvent(luckyDivisor.util.date.getCurrentDate());
	
	assert.ok(event.date.equals(eventDate), "upon creation event.date equal eventDate succeeds");
});




QUnit.test("end play event cloning tests", function( assert ) {
	var original = new EndPlayEvent(luckyDivisor.util.date.getCurrentDate());
	var clone = original.clone();

	assert.ok(clone.equals(original), "clone and original must be equal");
});