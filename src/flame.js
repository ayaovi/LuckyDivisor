/**
 * @file : main.js
 *
 * @description : This is the main file where the magic happens :).
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */



class Flame {
    /**
     * @description constructor.
     *
     * @param none.
     *
     * @return none.
     */
    constructor(position, images, width, height, speed) {
        this.position = position;
        this.speed = speed;
        this.startingPositionX = position.x;
        this.startingPositionY = position.y;
        this.width = width;
        this.height = height;
        this.isVisible = true;
        this.images = images
        this.currentImageIndex = 0;
    }


    /**
     * @description dosplays this flame.
     *
     * @param none.
     *
     * @return none.
     */
    show() {
        if (this.isVisible) {
            image(this.images[this.currentImageIndex++], this.position.x, this.position.y, this.width, this.height);
            this.position.add(createVector(0, this.speed));
            this.currentImageIndex %= this.images.length;
        }
    }


    /**
     * @description resets the position of this flame to its starting posisition.
     *
     * @param none.
     *
     * @return none.
     */
    resetPosition() {
        this.position = createVector(this.startingPositionX, this.startingPositionY);
    }
}