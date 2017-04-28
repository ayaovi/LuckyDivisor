/**
 * @file : dateTests.js
 *
 * @description : some tests on the clock object.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("date basics", function(assert) {
    var date = new ExtendedDate(10000);

    /**
     * Test getTime().
     */
    assert.equal(date.getTime(), 10000, "date.getTime() equal 10000 succeeds");
    assert.equal(date.toString(), "00:10", "date.toString() equal \"00:10\" succeeds");

    var anotherDate = new ExtendedDate(5000);
    var dateAddition = date.plus(anotherDate);

    /**
     * Test dates addition.
     */
    assert.equal(dateAddition.getTime(), 15000, "dateAddition.getTime() equal 15000 succeeds");
    assert.equal(dateAddition.toString(), "00:15", "dateAddition.toString() equal \"00:15\" succeeds");

    var dateDifference = date.minus(anotherDate);

    /**
     * Test dates difference.
     */
    assert.equal(dateDifference.getTime(), 5000, "dateDifference.getTime() equal 5000 succeeds");
    assert.equal(dateDifference.toString(), "00:05", "dateDifference.toString() equal \"00:05\" equal succeeds");

    /**
     * Test date comparison.
     */
    assert.ok(anotherDate.isLessThan(date), "smaller date less than bigger date succeeds");
});




QUnit.test("date cloning tests", function(assert) {
    var original = new ExtendedDate(10000);
    var clone = original.clone()
    assert.ok(clone.equals(original), "clone equals original should succeed");
});