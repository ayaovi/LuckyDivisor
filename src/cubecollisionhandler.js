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
	 * @description a handler collision between a player cube and a pn cube.
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
			luckyDivisor.global.sidePanel.update(pnCube.number);
			
			/**
			 * Update Player score.
			 */
			luckyDivisor.global.player.updateScore(pnCube.number);
			
			/**
			 * Make pnCube invisible.
			 */
			pnCube.visibility = false;
		}
		else if (this.cube.alreadyCollectedDivisors.includes(pnCube.number)) {
			/**
			 * Apply penalty for collecting an already collected cube.
			 */
			luckyDivisor.global.player.updateScore(-pnCube.number);
			
			/**
			 * Make pnCube invisible.
			 */
			pnCube.visibility = false;
		}
		else {
			/**
			 * Burn the player for collecting a non-divisor cube
			 */
			luckyDivisor.global.player.burn();
			
			/**
			 * Make pnCube invisible.
			 */
			pnCube.visibility = false;
		}
	}
}