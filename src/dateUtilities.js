/**
 * @file : dateUtilities.js
 *
 * @description : Config is simply an assembly of all global variables and functions.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

var luckyDivisor = luckyDivisor || {};

luckyDivisor.util.date = {};


/**
 * @description creates a new time for the current column being is different 
 * from that of the previous column.
 *
 * @param none.
 *
 * @return a new starting time.
 */
luckyDivisor.util.date.getNewColumnStartingDate = function()
{
	var newColumnStartingDate = new ExtendedDate(getCurrentDate().getTime() + random(cubeDelays) * 1000);
	
	/**
	 * We want the new date generated to be at least 0.5 seconds into the future.
	 */

	while(previousColumnStartingDate != undefined && newColumnStartingDate.minus(previousColumnStartingDate).getTime() <= 500)
	{
		newColumnStartingDate = new ExtendedDate(getCurrentDate() + random(cubeDelays) * 1000);
	}
	
	previousColumnStartingDate = newColumnStartingDate;
	
	return newColumnStartingDate;
}