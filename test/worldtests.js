/**
 * @file : worldtests.js
 *
 * @description : some tests on the World object.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("world cloning tests", function(assert) {
    var original = new World();
    original.init();
    original.makeMockComponents();
    var clone = original.clone();
    assert.ok(clone.equals(original), "clone equals original should succeed");
});