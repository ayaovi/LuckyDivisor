/**
 * @file : maintests.js
 *
 * @description : some tests on some of the global functions.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("global draw function test", function(assert) {
    luckyDivisor.util.createGameComponents();
    luckyDivisor.global.currentWorld.reset();
    luckyDivisor.global.currentWorld.topPanel.clock.stringTimeTillEndOfPlay = "00:15";
    assert.equal(luckyDivisor.global.worlds.length, 1, "before draw() execution, the number of worlds should be 1");

    draw();

    assert.ok(true, "This mainly to test if anything fails along the way.");
    assert.equal(luckyDivisor.global.worlds.length, 2, "after draw() execution, the number of worlds should increase by 1");
});