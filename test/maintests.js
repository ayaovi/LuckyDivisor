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
    var clock = luckyDivisor.global.currentWorld.topPanel.clock;
    clock.start();
    
    assert.equal(luckyDivisor.global.worlds.length, 1, "before draw() execution, the number of worlds should be 1");
    
    clock.date = clock.date.minus(new ExtendedDate(5000));  /** The reason why we need to reset the clock date 5 sec back in time is so it would appear as if have run down 5 seconds. */
    draw();

    assert.ok(true, "This mainly to test if anything fails along the way.");
    assert.equal(luckyDivisor.global.worlds.length, 2, "after draw() execution, the number of worlds should increase by 1");
});



QUnit.test("config test", function(assert) {
    assert.equal(luckyDivisor.config.WIDTH_OF_CANVAS, luckyDivisor.config.WIDTH_OF_GAME_FRAME * 0.8, "blablabla");
});



QUnit.test("world reversion test", function(assert) {
    /**
     * https://github.com/CodingTrain/Rainbow-Code/tree/master/challenges
     */
    luckyDivisor.util.createInitialWorld();
    var worlds = luckyDivisor.global.worlds;
    luckyDivisor.global.currentWorld.reset();
    luckyDivisor.global.currentWorld = luckyDivisor.global.currentWorld.clone();
    luckyDivisor.global.gameStatus = "Running";

    /**
     * Let's make some cubes fall.
     */
    luckyDivisor.global.currentWorld.columns.forEach(function(column) {
        if (column.visibleCubes().length == 0) {
            column.addCube();
        }
        column.visibleCubes().forEach(function(cube) {
            cube.fall();
        }, this);
    }, this);

    draw();

    assert.notOk(luckyDivisor.global.currentWorld.equals(worlds[0]), "because we have made cubes in all columns fall, the initial and current worlds should not be same.");

    var previousWorld = luckyDivisor.global.currentWorld;

    luckyDivisor.global.keyMap[17] = true;
    luckyDivisor.global.keyMap[90] = true;

    keyPressed();

    assert.ok(worlds.length == 1, "upon reverting back to previous world, the number of worlds should decrease by 1");
    assert.notOk(luckyDivisor.global.currentWorld.equals(previousWorld), "because we did \"ctrl+z\", we revert back to initial world");
});



QUnit.test("play game for a certain time test", async assert => {
    luckyDivisor.util.createInitialWorld();
    luckyDivisor.global.currentWorld.reset();
    luckyDivisor.global.currentWorld = luckyDivisor.global.currentWorld.clone();
    luckyDivisor.global.gameStatus = "Running";

    /**
     * Run the game for 6 seconds
     */
    var time = await luckyDivisor.util.runOnInterval(100, 6000, () => {
        luckyDivisor.global.currentWorld.columns.forEach((column) => {
            if (column.visibleCubes().length == 0) {
                column.addCube();
            }
            column.visibleCubes().forEach((cube) => {
                cube.fall();
            });
        });

        draw();
    });

    assert.ok(time.getTime() <= (20000 - 6000), "upon running the game for 6 seconds there should be @ most " + floor((20000 - 6000) / 1000) + " seconds on the clock");
    assert.ok(luckyDivisor.global.worlds.length > 1, "6 seconds of game time and there should @ least be 2 worlds in the list of worlds");
});