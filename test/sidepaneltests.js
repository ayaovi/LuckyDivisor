/**
 * @file : sidepaneltests.js
 *
 * @description : some tests on the SidePanel object.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("sidepanel basics", function( assert ) {
	var sidePanel = new SidePanel();

	/**
	 * When a new side panel is created we expect it to be placed at the right of the game canvas.
	 */
	assert.equal(sidePanel.position.x, luckyDivisor.config.WIDTH_OF_CANVAS, "upon creation sidePanel.position.x equal WIDTH_OF_CANVAS succeeds");
	assert.equal(sidePanel.position.y, 0, "upon creation sidePanel.position.y equal 0 succeeds");
	
	/**
	 * We also expect it to have width and height as set in the config file
	 */
	assert.equal(sidePanel.width, luckyDivisor.config.WIDTH_OF_SIDE_PANEL, "upon creation sidePanel.width equal WIDTH_OF_SIDE_PANEL succeeds");
	assert.equal(sidePanel.height, luckyDivisor.config.HEIGHT_OF_SIDE_PANEL, "upon creation sidePanel.height equal HEIGHT_OF_SIDE_PANEL succeeds");

	assert.equal(sidePanel.pnCubesYetToBeCollected.length, 0, "upon creation there should not be any cubes yet to be collected");

	/**
	 * Let's reset the side panel now and confirm that everything is as it is supposed to.
	 * For the reset to work, we need a player cube. As such, let create one with number 10.
	 */
	luckyDivisor.global.playerCube = new PlayerCube(10, 0, createVector(20, 770));
	sidePanel.reset();

	/**
	 * Upon reset, we expect the following:
	 * - sidePanel.pnCubesYetToBeCollected.length to be 3 (i.e. cubes with number 1, 2 and 5).
	 * - sidePanel.emoticon to be normal face.
	 */
	assert.equal(sidePanel.pnCubesYetToBeCollected.length, 3, "upon reset sidePanel.pnCubesYetToBeCollected.length equal 3 succeeds");
	assert.equal(sidePanel.emoticon.type, 0, "upon reset, emoticon should display normal face");
});