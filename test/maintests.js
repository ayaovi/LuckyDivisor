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



QUnit.test("world reversion test", function(assert) {
    luckyDivisor.util.createInitialWorld();
    var worlds = luckyDivisor.global.worlds;
    var currentWorld = luckyDivisor.global.currentWorld;
    currentWorld.reset();
    currentWorld = currentWorld.clone();

    /**
     * Let's make some cubes fall.
     */
    currentWorld.columns.forEach(function(column) {
        if (column.cubes.length == 0) {
            column.addCube();
        }
        column.cubes[0].fall();
    }, this);
    
    // currentWorld.topPanel.clock.stringTimeTillEndOfPlay = "00:15";
    draw();

    assert.notOk(currentWorld.equals(worlds[0]), "because we have made cubes in all columns fall, the initial and current worlds should not be same.");

    luckyDivisor.global.keyMap[17] = true;
    luckyDivisor.global.keyMap[90] = true;

    keyPressed();

    assert.ok(worlds.length == 1, "upon reverting back to previous world, the number of worlds should decrease by 1");
    assert.ok(currentWorld.equals(worlds[0]), "because we did \"ctrl+z\", we revert back to initial world");
});