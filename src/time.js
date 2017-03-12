/**
 * @file : time.js
 *
 * @description : a Time has the following properties:
 * 				hour,
 *				minute,
 *				second.
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
	constructor(hour, minute, second)
	{
		/**
		 * The following refers to the hour part of this Time.
		 * This value is expected to be between 0-23.
		 */
		this.hour = hour;

		/**
		 * The following refers to the minute part of this Time.
		 * This value is expected to be between 0-59.
		 */
		this.minute = minute;
		
		/**
		 * The following refers to the second part of this Time.
		 * This value is expected to be between 0-59.
		 */
		this.second = second;
	}
	

	/**
	 * @description ensures that the Time properties are constained within boudaries.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	validate()
	{
		if (this.hour > 23)
		{
			/**
			 * Should the hour value be more than 23, this can only mean that 
			 * we leapt into a new day. As such we should set the newDay flag.
			 */
			newDay = floor(this.hour / 24);
			this.hour %= 24;
		}
		if (this.minute > 59)
		{
			this.hour += floor(this.minute / 60);
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
		var seconds = abs((this.hour * 3600 + this.minute * 60 + this.second) - 
			(otherTime.hour * 3600 + otherTime.minute * 60 + otherTime.second));

		return this.toFullTime(seconds);
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
		var seconds = abs((this.hour * 3600 + this.minute * 60 + this.second) + 
			(otherTime.hour * 3600 + otherTime.minute * 60 + otherTime.second));

		return this.toFullTime(seconds);
	}


	/**
	 * @description converts a time in seconds to a new time in minutes and seconds.
	 *
	 * @param number of seconds.
	 *
	 * @return a new time in minutes and seconds.
	 */
	toFullTime(seconds)
	{
		/**
		 * Convert the seconds to minute and seconds.
		 */
		var hour = floor(seconds / 3600);
		var minuteRemainder = seconds % 3600;
		var minute = floor(minuteRemainder / 60);
		var second = minuteRemainder % 60;

		return new Time(hour, minute, second);
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