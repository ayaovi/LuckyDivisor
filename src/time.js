/**
 * @file : time.js
 *
 * @description : a Column is a tube or a line that Cubes are falling off.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : 
 */



/**
 * @description a constructor.
 *
 * @param a minute and second. These values are constrained between 0-59.
 *
 * @return none.
 */
function Time(minute, second)
{
	/**
	 * The following refers to the minute part of this as it is represented as 
	 * minute and second.
	 */
	this.minute = minute;
	
	/**
	 * The following refers to the second part of this as it is represented as 
	 * minute and second.
	 */
	this.second = second;


	/**
	 * @description ensures minute and second of this time are constrained between 0-59.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	this.validate = function()
	{
		if (this.minute > 59)
		{
			this.minute %= 60;
		}
		if (this.second > 59)
		{
			this.minute += floor(this.second / 60);
			this.second %= 60;
		}
	}

	this.equals = function(otherTime)
	{
		return (this.minute == otherTime.minute && this.second == otherTime.second);
	}
}