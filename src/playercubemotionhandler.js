/**
 * @file : playerCubeMotionHandler.js
 *
 * @description : A Motion object handles all movement of an object.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

class PlayerCubeMotionHandler {
	/**
	 * @description constructor.
	 *
	 * @param 
	 *
	 * @return 
	 */
	constructor(position) {
		/**
		 * This position is a reference to the object under motion.
		 */
		this.position = position;
	}
	
	
	/**
	 * @description moves the object.
	 *
	 * @param 
	 *
	 * @return 
	 */
	move() {
		if (keyIsDown(luckyDivisor.config.playerControls[0])) {
			this.moveLeft();
		}
		if (keyIsDown(luckyDivisor.config.playerControls[1])) {
			this.moveRight();
		}
		
		this.constrainPosition();
	}
	
	
	/**
	 * @description moves the object to the left with regards to its position.
	 *
	 * @param 
	 *
	 * @return 
	 */
	moveLeft() {
		/**
		 * Move player's cube one unit to the left.
		 */
		this.position.x -= luckyDivisor.config.DEFAULT_PLAYER_CUBE_SPEED;
	}
	
	
	/**
	 * @description moves the object to the right with regards to its position.
	 *
	 * @param 
	 *
	 * @return 
	 */
	moveRight() {
		/**
		 * Move player's cube one unit to the right.
		 */
		this.position.x += luckyDivisor.config.DEFAULT_PLAYER_CUBE_SPEED;
	}
	
	
	/**
	 * @description moves the object to the right with regards to its position.
	 *
	 * @param 
	 *
	 * @return 
	 */
	constrainPosition() {
		/**
		 * Ensure the Player's Cube does not slide off the canvas.
		 */
		this.position.x = constrain(this.position.x, 1, luckyDivisor.config.WIDTH_OF_CANVAS - luckyDivisor.config.SIDE_OF_CUBE - 1);
	}
}