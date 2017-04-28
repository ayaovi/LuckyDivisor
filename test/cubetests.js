/**
 * @file : cubetests.js
 *
 * @description : some tests on the Cube object.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("cube basics", function( assert ) {
	var cube = new Cube(10, 3, createVector(0, 0));
	
	assert.equal(cube.number, 10, "upon creation cube.number equal 10 succeeds");
	assert.equal(cube.id, 3, "upon creation cube.id equal 3 succeeds");
	assert.equal(cube.position.x, 0, "upon creation cube.position.x equal 0 succeeds");
	assert.equal(cube.position.y, 0, "upon creation cube.position.y equal 0 succeeds");
	assert.equal(cube.toString(), "[Cube: 3, 10]", "cube.toString() equal Cube: 10 succeeds");

	var otherCube = new Cube(10, 5, createVector(50, 30));
	assert.equal(otherCube.toString(), "[Cube: 5, 10]", "otherCube.toString() equal Cube: 10 succeeds");
	assert.notOk(cube.equals(otherCube), "cube and otherCube equality does not succeeds");
});



QUnit.test("cube cloning tests", function( assert ) {
	var original = new Cube(10, 3, createVector(0, 0));
	var clone = original.clone();
	assert.ok(clone.equals(original), "cube equals clone should succeed");
	assert.equal(clone.position, original.position, "in this case clone and cube should have the same position");
});