/**
 * @file : startnewcubeevent.js
 *
 * @description : An event is scheduled to run at a particular time.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

class StartNewCubeEvent extends Event
{
	/**
	 * @description constructor.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	constructor(time, columnIndex)
	{
		super(time);
		
		/**
		 * The index of the column in which to start a new cube.
		 */
		this.columnIndex = columnIndex;
	}
	
	/**
	 * @description a start of new cube event handler.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	process()
	{
		/**
		 * Make a call to the column with index this.columnIndex to start a new cube.
		 */
		columns[this.columnIndex].startNewCube();
	}
}