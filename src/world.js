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
    }


    /**
	 * @description makes a copy of this world.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
    init() {
        this.cubeIDs = 0;
        
        this.player = new Player();     /** Not sure about this. */
        this.player.init();

        this.previousColumnStartingDate = undefined;    /** Not sure about this. */
        this.columns = [];
        this.numberOfPnCubeCreated = 
        this.sidePanel = new SidePanel();
        this.eventQueue = new EventQueue();
    }



    /**
	 * @description makes a copy of this world.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	clone() {
        var clone = new World();
        clone.cubeIDs = this.cubeIDs;
        clone.player = this.player.clone();
        clone.playerCube = this.playerCube.clone();
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
        clone.cubeIDs = this.cubeIDs;
    }
}