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

	assert.equal(sidePanel.position.x, luckyDivisor.config.WIDTH_OF_CANVAS, "upon creation sidePanel.position.x equal WIDTH_OF_CANVAS succeeds");
	assert.equal(sidePanel.position.y, 0, "upon creation sidePanel.position.y equal 0 succeeds");	
	assert.equal(sidePanel.width, luckyDivisor.config.WIDTH_OF_SIDE_PANEL, "upon creation sidePanel.width equal WIDTH_OF_SIDE_PANEL succeeds");
	assert.equal(sidePanel.height, luckyDivisor.config.HEIGHT_OF_SIDE_PANEL, "upon creation sidePanel.height equal HEIGHT_OF_SIDE_PANEL succeeds");
});