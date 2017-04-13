/**
 * @file : event.js
 *
 * @description : An event is scheduled to run at a particular time.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

class Event {
	/**
	 * @description constructor.
	 *
	 * @param takes in a scheduled time for this event to be fired.
	 *
	 * @return none.
	 */
	constructor(date, type) {
		this.date = date;
		this.type = type;
	}
	
	
	/**
	 * @description what to do once the event s fired.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	process() {
		// Every subclass of event must implement its own process mechanism.
	}




	/**
	 * @description makes a copy of this event.
	 *
	 * @param none.
	 *
	 * @return Event.
	 */
	clone() {
		return new Event(this.date, this.type);
	}



	/**
	 * @description Tests equality of two events.
	 *
	 * @param Event.
	 *
	 * @return boolean.
	 */
	equals(otherEvent) {
		return (this.date.equals(otherEvent.date) && this.type == otherEvent.type);
	}
}