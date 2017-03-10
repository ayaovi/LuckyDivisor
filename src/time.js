/**
 * @file : time.js
 *
 * @description : a Column is a tube or a line that Cubes are falling off.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


class Time
{
	/**
	 * @description a constructor.
	 *
	 * @param a minute and second. These values are constrained between 0-59.
	 *
	 * @return none.
	 */
	constructor(minute, second)
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
	}


	/**
	 * @description ensures minute and second of this time are constrained between 0-59.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	validate()
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
	
	
	/**
	 * @description subtraction of two times.
	 *
	 * @param another Time object.
	 *
	 * @return a new Time object.
	 */
	minus(otherTime)
	{
		/**
		 * Get the time difference in seconds.
		 */
		var timeDifference = abs((this.minute * 60 + this.second) - (otherTime.minute * 60 + otherTime.second));

		return this.toMinuteAndSecond(timeDifference);
	}
	

	/**
	 * @description sddition of two times.
	 *
	 * @param another Time object.
	 *
	 * @return a new Time object.
	 */
	plus(otherTime)
	{
		/**
		 * Get the time difference in seconds.
		 */
		var timeAddition = abs((this.minute * 60 + this.second) + (otherTime.minute * 60 + otherTime.second));

		return this.toMinuteAndSecond(timeAddition);
	}


	/**
	 * @description converts a time in seconds to a new time in minutes and seconds.
	 *
	 * @param number of seconds.
	 *
	 * @return a new time in minutes and seconds.
	 */
	toMinuteAndSecond(seconds)
	{
		/**
		 * Convert the seconds to minute and seconds.
		 */
		var minute = floor(seconds / 60);
		var second = seconds % 60;

		return new Time(minute, second);
	}


	/**
	 * @description convert this time to seconds.
	 *
	 * @param none.
	 *
	 * @return an integer.
	 */
	toSeconds()
	{
		return (this.minute * 60 + this.second);
	}
	
	
	/**
	 * @description check whether this time is less than the other time.
	 *
	 * @param another time.
	 *
	 * @return true or false.
	 */
	isLessThan(otherTime)
	{
		return (this.toSeconds() < otherTime.toSeconds());
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
		return (padWithZero(this.minute) + ":" + padWithZero(this.second));
	}
	
	
	/**
	 * @description checks the equality of two times.
	 *
	 * @param another Time object.
	 *
	 * @return true or false.
	 */
	equals(otherTime)
	{
		return (this.minute == otherTime.minute && this.second == otherTime.second);
	}

	/**
	 * @description checks the equality of two times.
	 *
	 * @param another Time object.
	 *
	 * @return true or false.
	 */
	isLessOrEqualTo(otherTime)
	{
		return (this.isLessThan(otherTime) || this.equals(otherTime));
	}
}