/**
 * @file : world.js
 *
 * @description : A World is a state inwhich the game is in at some point in time.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */


class World {
    /**
     * @description a constructor
     *
     * @param none.
     *
     * @return none.
     */
    constructor() {
        /**
         * Its value is used for the ID of every cube in the game. It is to be restarted at the beginning of every play and incremented once a cube takes on its current value.
         */
        this.cubeIDs;

        /**
         * A reference to the player.
         */
        this.player;

        /**
         * A reference to the player cube.
         */
        this.playerCube;

        /**
         * A record of all columns in the game.
         */
        this.columns;

        /**
         * A collection of events waiting to be triggered.
         */
        this.eventQueue;

        /**
         * A reference to the side panel.
         */
        this.sidePanel;

        /**
         * A reference to the top panel.
         */
        this.topPanel;

        /**
         * Keeps track of how many Pn Cubes have been created in a play.
         */
        this.numberOfPnCubeCreated;

        /**
         * Keeps a record of the number of instances of any Pn Cube flavour that have been generated so far.
         */
        this.pnCubeCreationReccordMap;

        /**
         * Keeps track of the starting cube of the previous column during start up.
         */
        // this.previousColumnStartingCube;

        /**
         * Keeps track of the starting time of the previous column during start up.
         */
        this.previousColumnStartingDate;

        /**
         * Records the last time this world was taken on as a currentWorld.
         */
        this.lastVisitDate;
    }


    /**
     * @description initialises this world.
     *
     * @param none.
     *
     * @return none.
     */
    init() {
        this.player = new Player();
        this.player.init();
        this.topPanel = new TopPanel();
        this.topPanel.init();
        this.sidePanel = new SidePanel();
        this.eventQueue = new EventQueue();
    }




    /**
     * @description resets this world.
     *
     * @param none.
     *
     * @return none.
     */
    reset() {
        this.cubeIDs = 0;
        this.lastVisitDate = luckyDivisor.util.date.getCurrentDate();
        this.previousColumnStartingDate = undefined; /** Not sure about this. */
        this.columns = [];
        this.numberOfPnCubeCreated = 0;
        this.pnCubeCreationReccordMap = new Array();
        this.initialisePnCubeCreationRecord();
        this.eventQueue.reset();
        this.topPanel.reset();

        /**
         * Create a new player cube.
         * Down the line, the range that is supplied for the player number generation should be dynamically calculated.
         */
        var playerCubeNumber = luckyDivisor.util.math.generatePlayerCubeNumber(2, 100);
        this.playerCube = new PlayerCube(playerCubeNumber, 0, createVector((luckyDivisor.config.WIDTH_OF_CANVAS - luckyDivisor.config.SIDE_OF_CUBE) / 2, luckyDivisor.config.HEIGHT_OF_CANVAS - luckyDivisor.config.SIDE_OF_CUBE - 1));

        /**
         * Create all columns.
         */
        for (var i = 0; i < luckyDivisor.config.NUMBER_OF_COLUMNS; i++) {
            this.columns.push(new Column(luckyDivisor.config.COLUMN_WIDTH * i, i));

            /**
             * This needs to happen every time a column is created. Because a columns is not reset in the constructor.
             */
            this.columns[i].reset();
        }

        this.sidePanel.reset();
        this.topPanel.clock.start();
    }



    /**
     * @description Initialises the cube colour map.
     *
     * @param none.
     *
     * @return none.
     */
    initialisePnCubeCreationRecord() {
        this.pnCubeCreationReccordMap[1] = 0;
        this.pnCubeCreationReccordMap[2] = 0;
        this.pnCubeCreationReccordMap[3] = 0;
        this.pnCubeCreationReccordMap[5] = 0;
        this.pnCubeCreationReccordMap[7] = 0;
    }


    /**
     * @description makes a copy of this world.
     *
     * @param none.
     *
     * @return World.
     */
    clone() {
        var clone = new World();

        clone.cubeIDs = this.cubeIDs;
        clone.lastVisitDate = this.lastVisitDate.clone();
        clone.player = this.player.clone();
        clone.playerCube = this.playerCube.clone();

        clone.pnCubeCreationReccordMap = new Array();
        clone.pnCubeCreationReccordMap[1] = this.pnCubeCreationReccordMap[1];
        clone.pnCubeCreationReccordMap[2] = this.pnCubeCreationReccordMap[2];
        clone.pnCubeCreationReccordMap[3] = this.pnCubeCreationReccordMap[3];
        clone.pnCubeCreationReccordMap[5] = this.pnCubeCreationReccordMap[5];
        clone.pnCubeCreationReccordMap[7] = this.pnCubeCreationReccordMap[7];

        clone.columns = [];
        this.columns.forEach(function(column) {
            clone.columns.push(column.clone());
        }, this);

        clone.eventQueue = this.eventQueue.clone();
        clone.sidePanel = this.sidePanel.clone();
        clone.topPanel = this.topPanel.clone();

        if (this.previousColumnStartingDate != undefined) {
            clone.previousColumnStartingDate = this.previousColumnStartingDate.clone();
        }

        return clone;
    }



    /**
     * @description Tests the equality of two worlds.
     *
     * @param World.
     *
     * @return boolean.
     */
    equals(otherWorld) {
        return (this.cubeIDs == otherWorld.cubeIDs &&
            this.lastVisitDate.equals(otherWorld.lastVisitDate) &&
            this.player.equals(otherWorld.player) &&
            this.playerCube.equals(otherWorld.playerCube) &&
            this.pnCubeCreationReccordMap.length == otherWorld.pnCubeCreationReccordMap.length &&
            this.columns.length == otherWorld.columns.length &&
            this.eventQueue.equals(otherWorld.eventQueue) &&
            this.sidePanel.equals(otherWorld.sidePanel) &&
            this.topPanel.equals(otherWorld.topPanel)
        );
    }



    /**
     * @description returns a string representation of this world.
     *
     * @param none.
     *
     * @return string.
     */
    toString() {
        var representation = `======================= World =======================\nCubeIDs: ${this.cubeIDs}\nColumns:\n[`;
        this.columns.forEach(function(column) {
            representation += `\n\t${column.toString()}`;
        }, this);
        representation += "\n]";
        return representation;
    }
}