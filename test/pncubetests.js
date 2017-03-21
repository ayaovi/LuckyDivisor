/**
 * @file : pncubetests.js
 *
 * @description : some tests on the Cube object.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("pn cube basics", function( assert ) {
	/**
	 * The following initialisations needed for the cube creation to operate properly.
	 */
	luckyDivisor.global.pauseDuration = 0;
	luckyDivisor.global.eventQueue = new EventQueue();

	/**
	 * Let's create a PnCube with:
	 * pnCube.number be 5.
	 * pnCube.id be 3.
	 * pnCube.position be (0, 0).
	 * pnCube.columnIndex be 2.
	 */
	var pnCube = new PnCube(5, 3, createVector(0, 0), 2);
	
	assert.ok(pnCube.visibility, "upon creation pnCube.visibility should be true");
	assert.notOk(pnCube.hasStarted, "upon creation pnCube.hasStarted should be false");
	assert.notOk(pnCube.hasAlreadyInitiatedNewCubeStart, "upon creation pnCube.hasAlreadyInitiatedNewCubeStart should be false");
	assert.equal(pnCube.number, 5, "pnCube.number equals 5 succeeds");
	assert.equal(pnCube.columnIndex, 2, "pnCube.columnIndex equals 2 succeeds");
	assert.equal(pnCube.position.x, 0, "pnCube.position.x equals 0 succeeds");
	assert.equal(pnCube.position.y, 0, "pnCube.position.y equals 0 succeeds");
	assert.equal(pnCube.speed, (1.3 + 0.1 * 5), "pnCube.speed equals 1.8 succeeds");

	pnCube.fall();

	/**
	 * Because the cube has fallen (at least once), then it should have started.
	 * And its start date should be equal to the current date. Moreover the cube's 
	 * position.y should have increased by the cube's speed.
	 */
	assert.ok(pnCube.hasStarted, "upon fall pnCube.hasStarted should be true");
	assert.ok(pnCube.startDate.equals(luckyDivisor.util.date.getCurrentDate()), "upon fall pnCube.startDate equals succeeds");
	assert.equal(pnCube.position.y, 1.8, "upon fall pnCube.position.y equals 1.8 succeeds");

	/**
	 * Now let's make the cube fall until it falls off the canvas.
	 */
	while (pnCube.position.y < luckyDivisor.config.HEIGHT_OF_CANVAS) {
		pnCube.fall();
	}

	/**
	 * Let's make sure that the cube has indeed fallen off the canvas.
	 */
	assert.ok(pnCube.position.y >= luckyDivisor.config.HEIGHT_OF_CANVAS, "once pnCube has fallen off the canvas pnCube.position.y >= luckyDivisor.config.HEIGHT_OF_CANVAS succeeds");

	/**
	 * It is important to reset the cube back to invisibility.
	 */
	assert.notOk(pnCube.visibility, "once pnCube has fallen off the canvas pnCube.visibility should be false");
});