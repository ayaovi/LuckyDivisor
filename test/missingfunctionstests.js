/**
 * @file : pncubetests.js
 *
 * @description : some tests on the Cube object.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("random number generation tests", function(assert) {
    var numbers = [1, 2, 3, 4, 5];
    var randomNumber = random(numbers);
    console.log("Random nuber is: " + randomNumber);
    assert.ok(randomNumber > 0, "randomNumber > 0 should succeed");
});