/**
 * @file : cubeCollisionHandler.js
 *
 * @description : Handles collision between two cubes. May they be player cube and pn cube or two pn cubes.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


class CubeCollisionHandler {
	/**
	 * @description constructor.
	 *
	 * @param
	 *
	 * @return
	 */
	constructor(cube) {
		this.cube = cube;
	}

	/**
	 * @description a handler collision between two cubes..
	 *
	 * @param a Pn cube.
	 *
	 * @return none.
	 */
	handleCollisionWith(pnCube) {
		if (this.cube.id == 0) {
			this.handlePlayerCubeInCollisionWith(pnCube);
		}
		else {
			this.handlePnCubeInCollisionWith(pnCube);
		}
	}


	/**
	 * @description a collision handler between a player and a pn cubes.
	 *
	 * @param a Pn cube.
	 *
	 * @return none.
	 */
	handlePlayerCubeInCollisionWith(pnCube) {
		if (this.cube.yetToBeCollectedDivisors.includes(pnCube.number)) {
			/**
			 * Move pnCube.number to the lot of alreadyCollectedDivisors.
			 */
			this.cube.registerDivisorCollection(pnCube.number);

			/**
			 * Change the colour of playerCube.
			 */
			this.cube.changeColour();

			/**
			 * Update side panel.
			 */
			luckyDivisor.util.updateSidePanel(pnCube.number);

			/**
			 * Update Player score.
			 */
			luckyDivisor.util.updatePlayerScore(pnCube.number);

			/**
			 * Make emotional face.
			 */
			luckyDivisor.util.makeEmotionalFace(1);
		}
		else if (this.cube.alreadyCollectedDivisors.includes(pnCube.number)) {
			/**
			 * Apply penalty for collecting an already collected cube.
			 */
			luckyDivisor.util.updatePlayerScore(-pnCube.number);

			/**
			 * Make emotional face.
			 */
			luckyDivisor.util.makeEmotionalFace(0);
		}
		else {
			/**
			 * Burn the player for collecting a non-divisor cube
			 */
			luckyDivisor.util.burnPlayer();

			/**
			 * Make emotional face.
			 */
			luckyDivisor.util.makeEmotionalFace(-1);
		}
	}



	/**
	 * @description a collision handler between a two pn cubes.
	 *
	 * @param a Pn cube.
	 *
	 * @return none.
	 */
	handlePnCubeInCollisionWith(pnCube) {
		// TODO.
	}
}