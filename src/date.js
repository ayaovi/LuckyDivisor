/**
 * @file : date.js
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
	 * @description a constructor.
	 *
	 * @param a year, a month, an hour, a minute and second. 
	 * 
	 * @return none.
	 */
	constructor()
	{
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
		var timeDifference = abs((this.hour * 3600 + this.minute * 60 + this.second) - 
			(otherTime.hour * 3600 + otherTime.minute * 60 + otherTime.second));

		return this.toMinuteAndSecond(timeDifference);
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
		var timeAddition = abs((this.minute * 60 + this.second) + (otherTime.minute * 60 + otherTime.second));

		return this.toMinuteAndSecond(timeAddition);
	}


	/**
	 * @description converts a number of seconds to a new time in hour, minutes and seconds.
	 *
	 * @param number of seconds.
	 *
	 * @return a new time in minutes and seconds.
	 */
	toFullDate(numberOfDays)
	{
		/**
		 * Convert the seconds to hour, minute and seconds.
		 */
		var hour = floor(seconds / 3600);
		var minute = floor(seconds / 60);
		var second = seconds % 60;

		return new Time(minute, second);
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
		return (this.getTime() < otherDate.getTime());
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
		return (this.getTime() == otherDate.getTime());
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
}