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

class PnCube extends Cube {
	/**
	 * @description
	 *
	 * @param
	 *
	 * @return
	 */
	constructor(primeNumber, id, position, columnIndex) {
		super(primeNumber, id, position);

		/**
		 * Every pn cube has a specific colour.
		 * e.g. 1 is yellow, 2 is red, 3 is blue etc...
		 */
		this.colour = luckyDivisor.config.CUBE_COLOUR_MAP[this.number];

		this.speed = luckyDivisor.config.DEFAULT_PN_CUBE_SPEED + (luckyDivisor.config.PN_CUBE_SPEED_VARIANT_MULTIPLIER * this.number);

		/**
		 * The following is a variable that advises on the visibility of this Cube. This
		 * is mostly useful when displaying the Cube on the canvas. As such a non
		 * visible (i.e. this.visibility == false) will never be displayed on the canvas.
		 */
		this.visibility = true;

		/**
		 * Keeps track which column this cube is falling in. Having the column, we can
		 * initiate a new cube start/fall similar to this, columns[columnIndex].startNewCube().
		 */
		this.columnIndex = columnIndex;

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

		/**
		 * Handles the pn cube motion.
		 */
		this.motionHandler = new PnCubeMotionHandler(this);

		/**
		 * Handles collision with other pn.
		 */
		this.collisionHandler = new CubeCollisionHandler(this);
	}


	/**
	 * @description a function that displays this Cube.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	show() {
		if (this.visibility == true) {
			this.showSquare();
			this.showNumberOnCube();
		}
	}


	/**
	 * @description a function that makes this cube fall.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	fall() {
		this.motionHandler.fall();
	}

	/**
	 * @description Returns a representation of this cube.
	 *
	 * @param another cube.
	 *
	  @return true or false.
	 */
	toString() {
		return (super.toString() + ", " + this.columnIndex);
	}
}
