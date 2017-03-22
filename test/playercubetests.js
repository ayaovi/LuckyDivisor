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
	/**
	 * Let's create a player cube with:
	 * playerCube.number = 10;
	 * playerCube.id = 0;
	 * playerCube.position = (20, 770);
	 */
	var playerCube = new PlayerCube(10, 0, createVector(20, 770));
	
	assert.equal(playerCube.number, 10, "playerCube.number equals 10 succeeds");
	assert.equal(playerCube.position.x, 20, "playerCube.position.x equals 20 succeeds");
	assert.equal(playerCube.position.y, 770, "pnCube.position.y equals 770 succeeds");
	
	/**
	 * Now let's try moving left.
	 */
	playerCube.motionHandler.moveLeft();
	
	/**
	 * After moving left, the x-coordinate of the cube's position should have decreased by luckyDivisor.config.DEFAULT_PLAYER_CUBE_SPEED.
	 */
	assert.equal(playerCube.position.x, 20 - luckyDivisor.config.DEFAULT_PLAYER_CUBE_SPEED, "playerCube.position.x equals 20 succeeds");
	assert.equal(playerCube.position.y, 770, "pnCube.position.y equals 770 succeeds");
});