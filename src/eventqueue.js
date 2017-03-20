/**
 * @file : eventqueue.js
 *
 * @description : An EventQueue is an array with order property. 
 * It is sorted in increasing order of scheduled time.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

class EventQueue {
	/**
	 * @description constructor.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	constructor() {
		this.queue = [];
	}
	
	
	/**
	 * @description adds an event to this event queue add the appropriate position.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	push(newEvent) {
		if (this.queue.length == 0) {
			this.queue.push(newEvent);
		}
		else {
			var newEventAdded = false;
			for (var i = 0; i < this.queue.length; i++) {
				/**
				 * If the new event is set to be fired sooner than the event at this index, 
				 * then push the current event at this index further into the queue and insert 
				 * the new event at this position.
				 */
				if (newEvent.date.isLessOrEqualTo(this.queue[i].date)) {
					this.queue.splice(i, 0, newEvent);
					newEventAdded = true;
					break;
				}
			}
			
			/**
			 * Should the new event have the latest time, then we add it at the end of the queue.
			 */
			if (!newEventAdded) {
				this.queue.push(newEvent);
			}
		}
	}
	
	
	/**
	 * @description check whether this queue has events.
	 *
	 * @param none.
	 *
	 * @return true or false.
	 */
	hasEvents() {
		/**
		 * Check that the queue is not empty.
		 */
		return (this.queue.length > 0);
	}
	

	/**
	 * @description returns the first element in the queue.
	 *
	 * @param none.
	 *
	 * @return event.
	 */
	peek() {
		return this.queue[0];
	}


	/**
	 * @description remove the event at the specified index.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	remove(index) {
		this.queue.splice(index, 1);
	}

	
	/**
	 * @description resets the internal queue to an empty string.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	reset() {
		this.queue = [];
	}
}