/**
 * @file : pncube.js
 *
 * @description : A pn cube is a cube with special properties and features.
 * The number on a pn cube number has to be prime and less than 10. 
 * A PnCube starts its journey at the top of the canvas and falls downward until 
 * it falls off the game canvas where it become invisible.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

class PnCube extends Cube
{
	/**
	 * @description 
	 *
	 * @param
	 *
	 * @return 
	 */
	constructor(primeNumber, id, position)
	{
		super(primeNumber, id, position);
		
		this.colour = CUBE_COLOUR_MAP[this.number];
		
		/**
		 * The following is a variable that advises on the visibility of this Cube. This 
		 * is mostly useful when displaying the Cube on the canvas. As such a non 
		 * visible (i.e. this.visibility == false) will never be displayed on the canvas.
		 */
		this.visibility = true;
		
		/**
		 * The following simply keeps track for which Column this Cube belongs to. The 
		 * importance of this variable is apparent when we want to automatically start 
		 * a new Cube once the current has fallen off the canvas. The idea is to use 
		 * this variable to get the hosting column and initiate a new cube fall.
		 */
		this.hostingColumnIndex;
		
		/**
		 * Keeps track which column this cube is falling in. Having the column, we can 
		 * initiate a new cube start/fall similar to this, columns[columnIndex].startNewCube().
		 */
		this.columnIndex;
		
		/**
		 * A confirmation on whether this cube is falling or not, reason why it is initially 
		 * set to false.
		 */
		this.hasStarted = false;

		/**
		 * Keeps a record of when this cube started falling. At first start date may seem a 
		 * extreme, because intuitively a time should be just fine. In fact I started 
		 * out with a time. However with the introduction of the pause feature and the possibility 
		 * of the game being paused for as long as the player may want (which may well be days, 
		 * weeks or months). As such it became a requirement to change from start time to start 
		 * date as the latter is more complete.
		 */
		this.startDate;
		
		/**
		 * Safety measure to stop this cube from initiating more than one new cube start.
		 * This is by default false;
		 */
		this.hasAlreadyInitiatedNewCubeStart = false;
	}
	
	
	/**
	 * @description a function that displays this Cube.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	show()
	{
		if (this.visibility == true)
		{
			fill(this.colour);
			rect(this.position.x, this.position.y, SIDE_OF_CUBE, SIDE_OF_CUBE);
			fill(0);
			textSize(DEFAULT_CUBE_NUMBER_TEXT_SIZE);
			var padding = (SIDE_OF_CUBE - textWidth(this.number)) / 2;
			text(this.number, this.position.x + padding, this.position.y + DEFAULT_CUBE_NUMBER_TEXT_SIZE + CUBE_NUMBER_PADDING);
		}
	}
	
	
	/**
	 * @description a function that makes this cube fall.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	fall()
	{
		this.position.y += this.speed;
		
		/**
		 * Check whether the Cube has fallen off the canvas.
		 */
		if (this.position.y > HEIGHT_OF_CANVAS)
		{
			this.visibility = false;
		}

		/**
		 * Should this be the first time we come here, mark this.hasStarted as true.
		 * Otherwise check whether we are pass the halfway point. If so create a new 
		 * StartNewCubeEvent and schedule it for sometime now until this cube falls 
		 * off the canvas.
		 */
		if (!this.hasStarted)
		{
			this.hasStarted = true;
			this.startDate = getCurrentDate();
		}
		else
		{
			/**
			 * Check whether this cube is a third of the way through.
			 */
			if ((this.position.y >= HEIGHT_OF_CANVAS / 3) && !this.hasAlreadyInitiatedNewCubeStart)
			{
				/**
				 * Create an event for a new cube to fall after this one down the same column.
				 * First create the event date. Then create the event and schedule it to be fired 
				 * at the event date.
				 */
				
				/**
				 * The following refers to how much seconds it took this cube to go a 3rd of the way.
				 */
				var secondDifference = getCurrentDate().minus(this.startDate).getTime() / 1000;
				// console.log("Second Difference is: " + secondDifference);
				
				/**
				 * The next cube in the column of this cube will be set to fall sometimes now and the 
				 * time it took this cube to fall a 3rd of the way in the future.
				 * The following floor(random(secondDifference) * 1000) may appear confusing. You would 
				 * pose the question, why not have milliseconds different instead and have 
				 * floor(random(millisecondsDifference)), which is perfectly fine. But I do not want to 
				 * make the random number generator range too wide, reason why I choose to generate a 
				 * random second and convert it back to millisecond.
				 */
				var eventDate = new ExtendedDate(getCurrentDate().getTime() + floor(random(secondDifference) * 1000));
				
				/**
				 * Create the event and add it to the event queue.
				 */
				eventQueue.push(new StartNewCubeEvent(eventDate, this.columnIndex));
				
				/**
				 * DEBUGGING.
				 */
				// console.log("Cube " + this.number + " has scheduled a new start for " + eventTime.toString() + " @ " + getCurrentTime().toString());
				
				/**
				 * Stop this cube from initiating further new starts.
				 */
				this.hasAlreadyInitiatedNewCubeStart = true;
			}
		}
	}
}