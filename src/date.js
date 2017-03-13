/**
 * @file : mydate.js
 *
 * @description : A Date object has the following fields:
 * 			year : the year at which this time is created.
 * 			month : the month in which this time is created.
 * 			day : the day at which this time is created.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


class ExtendedDate extends Date
{
	/**
	 * @description a another constructor.
	 *
	 * @param milliseconds since January 1, 1970, 00:00:00. 
	 * 
	 * @return none.
	 */
	constructor(milliseconds)
	{
		super(milliseconds);
	}
	
	
	/**
	 * @description subtraction of two times.
	 *
	 * @param another Time object.
	 *
	 * @return a new Time object.
	 */
	minus(otherDate)
	{
		/**
		 * Get the time difference in seconds.
		 */
		return new ExtendedDate(this.getTime() - otherDate.getTime());
	}
	

	/**
	 * @description sddition of two times.
	 *
	 * @param another Time object.
	 *
	 * @return a new Time object.
	 */
	plus(otherDate)
	{
		/**
		 * Get the time difference in seconds.
		 */
		return new ExtendedDate(this.getTime() + otherDate.getTime());
	}

	
	/**
	 * @description check whether this time is less than the other time.
	 *
	 * @param another time.
	 *
	 * @return true or false.
	 */
	isLessThan(otherDate)
	{
		return (floor(this.getTime() / 1000) < floor(otherDate.getTime() / 1000));
	}
	
	
	/**
	 * @description checks the equality of two Date.
	 * This highly unlikely to ever return true though. 
	 * At least in the way it is implemented now.
	 *
	 * @param another Time object.
	 *
	 * @return true or false.
	 */
	equals(otherDate)
	{
		return (floor(this.getTime() / 1000) == floor(otherDate.getTime() / 1000));
	}


	/**
	 * @description checks the equality of two Date.
	 *
	 * @param another Time object.
	 *
	 * @return true or false.
	 */
	isLessOrEqualTo(otherDate)
	{
		return (this.isLessThan(otherDate) || this.equals(otherDate));
	}


	/**
	 * @description prints this time.
	 *
	 * @param none.
	 *
	 * @return this time a string minute:second.
	 */
	toString()
	{
		return (padWithZero(this.getMinutes()) + ":" + padWithZero(this.getSeconds()));
	}
}