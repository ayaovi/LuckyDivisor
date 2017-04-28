/**
 * @file : score.js
 *
 * @description : A score is more of a container to hold the player's 
 * life stars, a timer and the player's score.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

class Score {
    /**
     * @description constructor
     *
     * @param position
     *
     * @return none.
     */
    constructor(position) {
        this.position = position;
        this.score = 0;
    }


    /**
     * @description updates the player score.
     *
     * @param integer hit.
     *
     * @return none.
     */
    update(hit) {
        /**
         * A positive hit increases the score while a negative one decreases it.
         * A negative hit is a penalty for collecting an already collected factor.
         */
        this.score += hit;
    }


    /**
     * @description displays the the score on the top pane.
     *
     * @param none.
     *
     * @return none.
     */
    show() {
        /**
         * save current state.
         */
        push();

        /**
         * We want to print the score in black.
         */
        fill(0);

        /**
         * The size of the score text has a default value set in config.js.
         */
        textSize(luckyDivisor.config.DEFAULT_SCORE_TEXT_SIZE);
        text(this.score, this.position.x + luckyDivisor.config.DEFAULT_SCORE_PADDING, this.position.y + luckyDivisor.config.DEFAULT_SCORE_TEXT_SIZE);

        /**
         * restore back to state previous.
         */
        pop();
    }



    /**
     * @description checks the equality of two scores.
     *
     * @param Score.
     *
     * @return boolean.
     */
    equals(otherScore) {
        return (this.score == otherScore.score);
    }



    /**
     * @description Makes a copy of this score.
     *
     * @param none.
     *
     * @return Score.
     */
    clone() {
        var clone = new Score(this.position);
        clone.score = this.score;
        return clone;
    }


    /**
	 * @description Returns a representation of this score.
	 *
	 * @param none.
	 *
	 * @return string.
	 */
	toString() {
		return `[Score: ${this.score}]`;
	}
}