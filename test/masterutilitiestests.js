/**
 * @file : masterutilitiestests.js
 *
 * @description : some tests on the utitltites functions.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("theshold in array test", function(assert) {
    var array = [1, 2, 3, 2, 7];
    assert.ok(luckyDivisor.util.containsElementGreaterThan(array, 5), "indeed, the supplied array contains element greater than 5");
    assert.notOk(luckyDivisor.util.containsElementGreaterThan(array, 10), "indeed, the supplied array does not contain element greater than 10");
});



QUnit.test("element removal from array test", function(assert) {
    var array = [1, 2, 3, 2, 7];
    luckyDivisor.util.removeFromArray(array, 2);
    assert.equal(array.length, 4, "length of array equals 4 after removal of 2 should succeed");
});


QUnit.test("new id test", function(assert) {
    luckyDivisor.util.createGameComponents();
    luckyDivisor.global.currentWorld.reset();
    var id = luckyDivisor.util.newID();
    assert.ok(id > 0, "new id should bigger than 0");
});


QUnit.test("player score update test", function(assert) {
    luckyDivisor.util.createGameComponents();
    luckyDivisor.global.currentWorld.reset();
    luckyDivisor.util.updatePlayerScore(3);
    var player = luckyDivisor.global.currentWorld.player;
    assert.equal(player.score.score, 3, "player score should be 3 after update");
});


QUnit.test("new game world creation test", function(assert) {
    luckyDivisor.util.createNewWorld();
    assert.equal(luckyDivisor.global.worlds.length, 1, "upon game components creation, a game world should be created");
});



QUnit.test("new player data creation test", function(assert) {
    var playerData = luckyDivisor.util.createNewPlayerData();
    assert.equal(Object.keys(playerData).length, 3, "upon initialisation, playerData should 3 elements.");
});



QUnit.test("player data initialisation test", function(assert) {
    luckyDivisor.global.playerData = undefined;
    luckyDivisor.util.initPlayerData();
    assert.equal(Object.keys(luckyDivisor.global.playerData).length, 3, "upon initialisation, playerData should 3 elements.");
});


QUnit.test("player name test", function(assert) {
    luckyDivisor.global.playerData = undefined;
    luckyDivisor.util.initPlayerData();
    assert.equal(luckyDivisor.util.playerName(), "Ayaovi", "player name should be \"Ayaovi\"");
});


QUnit.test("GetDefaultSpeed test", function(assert) {
    var speed = luckyDivisor.util.getDefaultSpeed(1);
    assert.equal(toDecimalPlace(speed, 1), 1.4, "default speed for pn cube with number 1 should be 1.8");
});



QUnit.test("GetIncrementalSpeed test", function(assert) {
    var speed = luckyDivisor.util.getIncrementalSpeed(1, 6);
    assert.equal(toDecimalPlace(speed, 2), 0.28, "incremental speed for pn cube with number 1 at the 6th play should be 0.28");
});



QUnit.test("Pad with zero test", function(assert) {
    assert.equal(luckyDivisor.util.padWithZero(6), "06", "6 padded with zero should be \"06\"");
    assert.equal(luckyDivisor.util.padWithZero(11), "11", "11 padded with zero should still be \"11\"");
});