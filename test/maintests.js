/**
 * @file : maintests.js
 *
 * @description : some tests on some of the global functions.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("global draw function test", function( assert ) {
    luckyDivisor.util.createGameComponents();
    luckyDivisor.global.currentWorld.reset();

    draw();

    assert.ok(true, "This mainly to test if anything fails along the way.")
});