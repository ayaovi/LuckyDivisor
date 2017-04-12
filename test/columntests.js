/**
 * @file : columntests.js
 *
 * @description : some tests on the Column object.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("column basics", function( assert ) {
  /**
   * Let's create a column with the following:
   * column.xCoordinate = 0;
   * column.index = 0;
   */
  var column = new Column(0, 0);

  assert.equal(column.x, 0, "upon creation, column.xCoordinate equals 0 succeeds");
  assert.equal(column.index, 0, "upon creation, column.index equals 0 succeeds");
});



QUnit.test("column cloning tests", function( assert ) {
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