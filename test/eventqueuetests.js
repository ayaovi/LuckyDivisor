/**
 * @file : eventqueuetests.js
 *
 * @description : some tests on the EventQueue object.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


QUnit.test("event queue basics", function( assert ) {
	var eventQueue = new EventQueue();

	assert.equal(eventQueue.queue.length, 0, "upon creation eventQueue.queue.length equal 0 succeeds");
});


QUnit.test("event queue cloning test", function( assert ) {
	/**
	 * Let's create a new event queue.
	 */
	var original = new EventQueue();

	/**
	 * Let's add some events to the queue.
	 */
	original.push(new StartNewCubeEvent(luckyDivisor.util.date.getCurrentDate(), 0));
	original.push(new StartNewCubeEvent(luckyDivisor.util.date.getCurrentDate(), 6));
	original.push(new EndPlayEvent(luckyDivisor.util.date.getCurrentDate()));

	var clone = original.clone();
	assert.ok(clone.equals(original),"upon creation eventQueue.queue.length equal 0 succeeds");
});