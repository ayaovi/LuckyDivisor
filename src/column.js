/**
 * @file : column.js
 *
 * @description : a Column is a tube or a line that Cubes are falling off.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

class Column
{
	/**
	 * @description a constructor.
	 *
	 * @param an x coordinate.
	 *
	 * @return none.
	 */
	constructor(xCordinate)
	{
		/**
		 * Because there are multiple Columns side by side on the game canvas, there is a 
		 * need to know where one starts and end. Hopefully we already know how wide each 
		 * one of them is (in the global variable COLUMN_WIDTH). As such, the following 
		 * references the x-coordinate of where a Column starts. And consequently it would 
		 * end at (x + COLUMN_WIDTH - 1) or just (x + COLUMN_WIDTH) depending one how you 
		 * look at it.
		 */
		this.x = xCordinate;

		/**
		 * A Columns contains Cube that are falling. But at the start of a play, it is not 
		 * required of a column to immediately have a Cube falling down it. As such I have 
		 * coin toss outcome to decide whether the column should have cube or not.
		 */
		this.cubes;
		
		/**
		 * the following sets the cubes in this column to start falling sometime between now 
		 * and 5 seconds later. And until this (system) time is reached, nothing is shown in 
		 * this column.
		 */
		this.startingTime;

		/**
		 * the following indicates that this column is up and running (i.e. it has Cubes 
		 * falling down it).
		 */
		this.cubesHaveStartedFalling;
	}

	/**
	 * @description displays the content of this column.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	show()
	{
		if (this.cubesHaveStartedFalling)
		{
			this.routine();
			// console.log("CUBES HAVE BEEN FALLING");
		}
		else
		{
			if (this.startingTime.equals(new Time(minute(), second())))
			{
				// console.log("TIME FOR CUBES TO BE FALLING");
				this.cubesHaveStartedFalling = true;
				
				if (this.cubes.length == 0)
				{
					this.addCube();
				}
				
				this.routine();
			}
			// console.log("NO CUBES HAVE BEEN FALLING");
		}
	}


	/**
	 * @description makes every Cube in this Column fall.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	routine()
	{
		for (var i = 0; i < this.cubes.length; i++)
		{
			this.cubes[i].fall();
			this.cubes[i].show();
		}
	}


	/**
	 * @description resets the necessary parameters of this columns.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	reset()
	{
		this.cubesHaveStartedFalling = false;
		this.cubes = (floor(random(2)) > 0) ? [getNewColumnStartingCube(this.x)] : [];
		this.startingTime = getNewColumnStartingTime();
	}


	/**
	 * @description adds a new Cube to the queue of this Column.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	addCube()
	{
		this.cubes.push(new PnCube(random(primeNumbers), ++ID, createVector(this.x + DEFAULT_COLUMN_PADDING, 0)));
	}
}