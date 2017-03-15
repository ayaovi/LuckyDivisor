/**
 * @file : date.js
 *
 * @description : A Date object has the following attributes:
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
	 * @description a constructor.
	 *
	 * @param milliseconds since January 1, 1970, 00:00:00 (aka epoch date/time). 
	 * 
	 * @return none.
	 */
	constructor(milliseconds)
	{
		super(milliseconds);
	}
	
	
	/**
	 * @description subtraction of two ExtendedDates.
	 * It expects this date to be greater than the other date. Should this not be the case, it returns null.
	 *
	 * @param another ExtendedDate.
	 *
	 * @return a new ExtendedDate or null.
	 */
	minus(otherDate)
	{
		/**
		 * Get the time difference of this date and the other date in milliseconds.
		 */
		return new ExtendedDate(abs(this.getTime() - otherDate.getTime()));
	}
	

	/**
	 * @description addition of two ExtendedDates.
	 *
	 * @param another ExtendedDate.
	 *
	 * @return a new ExtendedDate.
	 */
	plus(otherDate)
	{
		return new ExtendedDate(this.getTime() + otherDate.getTime());
	}

	
	/**
	 * @description check whether this ExtendedDate is less than the other ExtendedDate.
	 *
	 * @param another time.
	 *
	 * @return true or false.
	 */
	isLessThan(otherDate)
	{
		/**
		 * We just compare their respective amount of seconds since the epoch time.
		 */
		return (floor(this.getTime() / 1000) < floor(otherDate.getTime() / 1000));
	}
	
	
	/**
	 * @description checks the equality of two Date. This highly unlikely to ever return true though. At least in the way it is implemented now.
	 *
	 * @param another Time object.
	 *
	 * @return true or false.
	 */
	equals(otherDate)
	{
		/**
		 * We just compare the equality of the respective amount of seconds since the epoch time.
		 */
		return (floor(this.getTime() / 1000) == floor(otherDate.getTime() / 1000));
	}


	/**
	 * @description checks the equality of two ExtendedDate.
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
	 * @description prints the minute and second of this ExtendedDate.
	 *
	 * @param none.
	 *
	 * @return a string minute:second.
	 */
	toString()
	{
		return (padWithZero(this.getMinutes()) + ":" + padWithZero(this.getSeconds()));
	}
}