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
	assert.equal(playerCube.position.x, 20 - playerCube.speed, "playerCube.position.x equals 20 succeeds");
	
	/**
	 * And the y-coordinate should not change as we are only moving side ways.
	 */
	assert.equal(playerCube.position.y, 770, "pnCube.position.y equals 770 succeeds");
	
	/**
	 * Now let's try moving the cube 5x to the left.
	 * Mathematically playerCube.position.x = 15 - (5 * 5) = -10.
	 * But this would put us off the canvas. As such playerCube.position.x should be automatically 
	 * constrained back to 1.
	 */
	for (var i = 0; i < 5; i++) {
		playerCube.motionHandler.moveLeft();
	}
	
	/**
	 * Let's confirm that playerCube.position.x is indeed 1.
	 */
	assert.equal(playerCube.position.x, 1, "playerCube.position.x equals 1 succeeds");

	/**
	 * Now let's try moving to the right.
	 * playerCube.position.x should now be 6.
	 */
	playerCube.motionHandler.moveRight();

	/**
	 * Let's confirm that playerCube.position.x is indeed 6.
	 */
	assert.equal(playerCube.position.x, 1 + playerCube.speed, "playerCube.position.x equals 6 succeeds");

	/**
	 * Now let's try moving the cube 100x to the right.
	 * Mathematically playerCube.position.x = 6 + (5 * 100) = 600.
	 * But this would put us off the canvas. As such playerCube.position.x should be automatically 
	 * constrained back to (luckyDivisor.config.WIDTH_OF_CANVAS - luckyDivisor.config.SIDE_OF_CUBE - 1).
	 */
	for (var i = 0; i < 100; i++) {
		playerCube.motionHandler.moveRight();
	}

	/**
	 * Let's confirm that playerCube.position.x is indeed 1.
	 */
	assert.equal(playerCube.position.x, (luckyDivisor.config.WIDTH_OF_CANVAS - luckyDivisor.config.SIDE_OF_CUBE - 1), "playerCube.position.x equals -- succeeds");

	/**
	 * Test that playerCube.alreadyCollectedDivisors is indeed empty upon creation.
	 */
	assert.equal(playerCube.alreadyCollectedDivisors.length, 0, "upon creation the collection of already collected divisors is empty");

	/**
	 * Test that playerCube.yetToBeCollectedDivisors contains 1, 2, 5.
	 */
	assert.equal(playerCube.yetToBeCollectedDivisors.length, 3, "Given that playerCube.number is 10, playerCube.yetToBeCollectedDivisors.length equal 3 succeeds");
	assert.ok(playerCube.yetToBeCollectedDivisors.includes(1), "playerCube.yetToBeCollectedDivisors.include(1) succeeds");
	assert.ok(playerCube.yetToBeCollectedDivisors.includes(2), "playerCube.yetToBeCollectedDivisors.include(2) succeeds");
	assert.ok(playerCube.yetToBeCollectedDivisors.includes(5), "playerCube.yetToBeCollectedDivisors.include(5) succeeds");

	/**
	 * Test playerCube.hasCollectedAll().
	 * Because we have not yet collected any pn cube we expect playerCube.hasCollectedAll() to fail.
	 */
	assert.notOk(playerCube.hasCollectedAll(), "Because no pnCube is yet collected playerCube.hasCollectedAll() does not succeed");

	/**
	 * Test cube collection.
	 * Let's create a pnCube with number 2 and make our playerCube collect.
	 */
	var pnCube2 = new PnCube(2, 3, createVector(125, 770), 2);

	playerCube.collisionHandler.handleCollisionWith(pnCube2);

	/**
	 * Should pnCube2 collection be successful, we expect playerCube.alreadyCollectedDivisors 
	 * to increase in length and playerCube.yetToBeCollectedDivisors to decrease in length.
	 */

	/**
	 * Test that playerCube.alreadyCollectedDivisors is indeed of length 1.
	 */
	assert.equal(playerCube.alreadyCollectedDivisors.length, 1, "once pnCube2 collected playerCube.alreadyCollectedDivisors.length equal 1 succeeds");

	/**
	 * Test that playerCube.yetToBeCollectedDivisors is indeed of length 2.
	 */
	assert.equal(playerCube.yetToBeCollectedDivisors.length, 2, "Given that pnCube2 has been collected playerCube.yetToBeCollectedDivisors.length equal 2 succeeds");

	/**
	 * TODO: Go test sidePanel and Player first. Then come back here.
	 */
	// var pnCube5 = new PnCube(5, 5, createVector(325, 770), 8);
	// var pnCube1 = new PnCube(1, 13, createVector(5, 770), 0);
});