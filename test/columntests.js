/**
 * @file : columntests.js
 *
 * @description : some tests on the Column object.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("column basics", function(assert) {
    /**
     * Let's create a column with the following:
     * column.xCoordinate = 0;
     * column.index = 0;
     */
    var column = new Column(0, 0);

    assert.equal(column.x, 0, "upon creation, column.xCoordinate equals 0 succeeds");
    assert.equal(column.index, 0, "upon creation, column.index equals 0 succeeds");
});



QUnit.test("column cloning tests", function(assert) {
    luckyDivisor.util.createGameComponents();
    luckyDivisor.global.currentWorld.reset();

    /**
     * Let's create a column with the following:
     * column.xCoordinate = 0;
     * column.index = 0;
     */
    var original = new Column(0, 0);

    /**
     * Let's add some cubes to our column.
     * But defore that we need to reset it.
     */
    original.reset();
    original.addCube();
    original.addCube();
    original.addCube();

    /**
     * Now, let's create a clone.
     */
    var clone = original.clone();

    assert.ok(clone.equals(original), "clone equals original should succeed");
});



QUnit.test("column cube addition tests", function(assert) {
    luckyDivisor.util.createGameComponents();
    luckyDivisor.global.currentWorld.reset();

    var column = new Column(0, 0);
    column.reset();
    column.addCube();
    assert.equal(column.cubes.length, 1, "upon adding a cube column should have a cube in its internal queue");
    assert.ok(column.cubes[0].id > 0, "a pn cube id should be bigger than 1");
});



QUnit.test("column new cube cube start tests", function(assert) {
    luckyDivisor.util.createGameComponents();
    luckyDivisor.global.currentWorld.reset();

    var column = new Column(0, 0);
    column.reset();
    try {
        column.startNewCube();
    } catch (exception) {
        assert.equal(exception.message, "Column 0 is not started but tried to add cubes.", "exception message should be \"Column 0 is not started but tried to add cubes.\"");
    }
});



QUnit.test("column visible cubes tests", function(assert) {
    luckyDivisor.util.createGameComponents();
    luckyDivisor.global.currentWorld.reset();

    var column = new Column(0, 0);
    column.reset();
    column.addCube();
    column.addCube();
    column.cubes[0].fall();
    column.cubes[1].visibility = false;
    var visibleCubesInColumn = column.visibleCubes();
    assert.equal(visibleCubesInColumn.length, 1, "there is indeed 1 visible cube in column.");
});