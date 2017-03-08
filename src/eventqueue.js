/**
 * @file : eventqueue.js
 *
 * @description : An EventQueue is an array with order property/ It is sorted in increasing order of scheduled time.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */
 
class EventQueue
{
	/**
	 * @description constructor.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	constructor()
	{
		this.queue = [];
	}
	
	
	/**
	 * @description adds an event to this event queue add the appropriate position.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	push(newEvent)
	{
		if (this.queue.length == 0)
		{
			queue.push();
		}
		else
		{
			for (var i = 0; i < this.queue.length; i++)
			{
				/**
				 * If the new event is set to be fired sooner than the event at this index, 
				 * then push the current event at this index further into the queue and insert 
				 * the new event at this position.
				 */
				if (newEvent.time.isLessThan(this.queue[i]))
				{
					queue.splice(i, 0, newEvent);
					break;
				}
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
	hasEvents()
	{
		return this.queue.length > 0;
	}
	
	
	/**
	 * @description resets the internal queue to an empty string.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	reset()
	{
		this.queue = [];
	}
}