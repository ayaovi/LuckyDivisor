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
    luckyDivisor.util.createInitialWorld();
    luckyDivisor.global.currentWorld.reset();
    luckyDivisor.global.currentWorld.topPanel.clock.stringTimeTillEndOfPlay = "00:15";
    assert.equal(luckyDivisor.global.worlds.length, 1, "before draw() execution, the number of worlds should be 1");

    draw();

    assert.ok(true, "This mainly to test if anything fails along the way.");
    assert.equal(luckyDivisor.global.worlds.length, 2, "after draw() execution, the number of worlds should increase by 1");
});



QUnit.test("config test", function(assert) {
    assert.equal(luckyDivisor.config.WIDTH_OF_CANVAS, luckyDivisor.config.WIDTH_OF_GAME_FRAME * 0.8, "blablabla");
});



QUnit.test("world reversion test", function(assert) {
    luckyDivisor.util.createInitialWorld();
    var worlds = luckyDivisor.global.worlds;
    luckyDivisor.global.currentWorld.reset();
    luckyDivisor.global.currentWorld = luckyDivisor.global.currentWorld.clone();
    luckyDivisor.global.gameStatus = "Running";

    console.log(luckyDivisor.global.currentWorld.toString());

    /**
     * Let's make some cubes fall.
     */
    luckyDivisor.global.currentWorld.columns.forEach(function(column) {
        if (column.cubes.length == 0) {
            column.addCube();
        }
        column.cubes[0].fall();
    }, this);

    console.log(luckyDivisor.global.currentWorld.toString());

    // currentWorld.topPanel.clock.stringTimeTillEndOfPlay = "00:15";
    draw();

    assert.notOk(luckyDivisor.global.currentWorld.equals(worlds[0]), "because we have made cubes in all columns fall, the initial and current worlds should not be same.");

    var previousWorld = luckyDivisor.global.currentWorld;

    luckyDivisor.global.keyMap[17] = true;
    luckyDivisor.global.keyMap[90] = true;

    keyPressed();

    assert.ok(worlds.length == 1, "upon reverting back to previous world, the number of worlds should decrease by 1");
    assert.notOk(luckyDivisor.global.currentWorld.equals(previousWorld), "because we did \"ctrl+z\", we revert back to initial world");
});