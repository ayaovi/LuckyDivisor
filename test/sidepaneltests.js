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
	luckyDivisor.global.playerCube = new PlayerCube(10, 0, createVector(20, 770));
	var sidePanel = new SidePanel();

	assert.equal(sidePanel.position.x, luckyDivisor.config.WIDTH_OF_CANVAS, "upon creation sidePanel.position.x equal WIDTH_OF_CANVAS succeeds");
	assert.equal(sidePanel.position.y, 0, "upon creation sidePanel.position.y equal 0 succeeds");	
	assert.equal(sidePanel.width, luckyDivisor.config.WIDTH_OF_SIDE_PANEL, "upon creation sidePanel.width equal WIDTH_OF_SIDE_PANEL succeeds");
	assert.equal(sidePanel.height, luckyDivisor.config.HEIGHT_OF_SIDE_PANEL, "upon creation sidePanel.height equal HEIGHT_OF_SIDE_PANEL succeeds");
	
	sidePanel.reset();
	assert.equal(Object.keys(sidePanel.numberOfPnCubesYetToBeCollected).length, 5, "upon reset sidePanel.numberOfPnCubesYetToBeCollected.length equals 5 succeeds");
	assert.equal(sidePanel.numberOfPnCubesYetToBeCollected[1], 1, "sidePanel.numberOfPnCubesYetToBeCollected[1] equals 1 succeeds");
	assert.equal(sidePanel.numberOfPnCubesYetToBeCollected[2], 1, "sidePanel.numberOfPnCubesYetToBeCollected[2] equals 1 succeeds");
	assert.equal(sidePanel.numberOfPnCubesYetToBeCollected[3], 0, "sidePanel.numberOfPnCubesYetToBeCollected[3] equals 0 succeeds");
	assert.equal(sidePanel.numberOfPnCubesYetToBeCollected[5], 1, "sidePanel.numberOfPnCubesYetToBeCollected[5] equals 1 succeeds");
	assert.equal(sidePanel.numberOfPnCubesYetToBeCollected[7], 0, "sidePanel.numberOfPnCubesYetToBeCollected[7] equals 0 succeeds");
	
	/**
	 * TODO: Side panel update.
	 */
	sidePanel.update(2);
	assert.equal(sidePanel.numberOfPnCubesYetToBeCollected[2], 0, "because we made an update sidePanel.numberOfPnCubesYetToBeCollected[2] equals 0 succeeds");
});