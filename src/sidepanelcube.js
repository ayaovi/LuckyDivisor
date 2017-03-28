/**
 * @file : sidepanel.js
 *
 * @description : A side panel is a panel that contains the list of yet to be collected Pn cubes by the player.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


class SidePanelCube extends Cube {
	/**
	 * @description constructor.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	constructor(number, id, position, multiplier) {
		super(number, id, position);

		this.multiplier = multiplier;
	}



	/**
	 * @description notifies the cube of its collection.
	 * In response, it decrements the its multiplier.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	notifyOfCollection() {
		if (this.multiplier > 0) {
			--this.multiplier;
		}
	}




	/**
	 * @description notifies the cube of an occurence.
	 * In response, it increments its multiplier.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	notifyOfOccurence() {
		++this.multiplier;
	}



	/**
	 * @description updates the visibility of this cube.
	 * The cube becomes invisible when its multiplier euals 0.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	updateVisibility() {
		if (this.multiplier == 0) {
			this.visibility = false;
		}
	}



	/**
	 * @description displays the cube in the side panel.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	show() {
		if (this.visibility == true) {
			/**
			 * Display the cube.
			 */
			this.showSquare();
			this.showNumberOnCube();

			/**
			 * Then its multiplier.
			 */
			text("x" + this.multiplier, this.position.x + luckyDivisor.config.DEFAULT_PADDING_OF_CUBE_OCCURENCE_IN_SIDE_PANEL, this.position.y + luckyDivisor.config.SIDE_OF_CUBE * 0.75);
		}
	}
}