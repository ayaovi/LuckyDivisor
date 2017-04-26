/**
 * @file : clock.js
 *
 * @description : A Clock is displayed as minute:second. It runs down until it reaches 00:00.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


class Clock {
    /**
     * @description constructor.
     *
     * @param none.
     *
     * @return none.
     */
    constructor() {
        /**
         * The position of the timer as a vector with coordinates (x, y).
         */
        this.position;

        /**
         * The time at which this timer has started.
         */
        this.date;

        /**
         * The duration of a play.
         */
        this.playDuration;

        /**
         * Confirmation that the timer has started or not.
         */
        this.hasStarted;

        /**
         * A string representation of the time till the end of current play displayed as minute:second.
         */
        this.stringTimeTillEndOfPlay;
    }

    /**
     * @description a timer initialiser.
     *
     * @param none.
     *
     * @return none.
     */
    init() {
        this.hasStarted = false;
        this.position = createVector(0, 0);
        this.playDuration = new ExtendedDate(luckyDivisor.config.defaultPlayDuration[0] * 60000 + luckyDivisor.config.defaultPlayDuration[1] * 1000);
        this.stringTimeTillEndOfPlay = this.playDuration.toString();
    }


    /**
     * @description A start event handler.
     *
     * @param none.
     *
     * @return none.
     */
    start() {
        /**
         * When the clock is called up to start, we set the hasStarted variable to true.
         */
        this.hasStarted = true;
        this.date = luckyDivisor.util.date.getCurrentDate();
        this.timeTillEndOfPlay();
    }


    /**
     * @description computes the time till end of play
     *
     * @param none.
     *
     * @return ExtendedDate.
     */
    timeTillEndOfPlay() {
        // this.stringTimeTillEndOfPlay = this.date.plus(this.playDuration).minus(luckyDivisor.util.date.getCurrentDate()).toString();
        return this.date.plus(this.playDuration).minus(luckyDivisor.util.date.getCurrentDate());
    }

    /**
     * @description A reset event handler.
     *
     * @param none.
     *
     * @return none.
     */
    reset() {
        if (this.hasStarted) {
            this.init();
        }
    }


    /**
     * @decsription Responsible for displaying this timer.
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
         * Before updating time till end of play, check that the clock has indeed been started.
         */
        if (this.hasStarted) {
            this.stringTimeTillEndOfPlay = this.timeTillEndOfPlay().toString();
        }

        fill(0);
        textSize(luckyDivisor.config.DEFAULT_TIMER_TEXT_SIZE);
        text(this.stringTimeTillEndOfPlay, this.position.x + luckyDivisor.config.DEFAULT_TIMER_PADDING, this.position.y + luckyDivisor.config.DEFAULT_TIMER_TEXT_SIZE);

        /**
         * restore back to state previous.
         */
        pop();
    }


    /**
     * @description Tests equality of two clocks.
     *
     * @param Clock.
     *
     * @return boolean.
     */
    equals(otherClock) {
        return (this.date.equals(otherClock.date) &&
            this.playDuration.equals(otherClock.playDuration) &&
            this.hasStarted == otherClock.hasStarted &&
            this.stringTimeTillEndOfPlay == otherClock.stringTimeTillEndOfPlay);
    }


    /**
     * @description Makes a copy of this cube.
     *
     * @param none.
     *
     * @return Clock.
     */
    clone() {
        var clone = new Clock();
        clone.position = this.position;
        clone.date = this.date.clone();
        clone.playDuration = this.playDuration.clone();
        clone.hasStarted = this.hasStarted;
        clone.stringTimeTillEndOfPlay = this.stringTimeTillEndOfPlay;
        return clone;
    }
}