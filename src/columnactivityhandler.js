/**
 * @file : column.js
 *
 * @description : a Column is a tube or a line that Cubes are falling off.
 *
 * @author : Ayaovi Espoir Djissenou
 *
 * @version : v1
 */

class ColumnActivityHandler {
    /**
	 * @description a constructor.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
    constructor(column) {
        this.column = column;
    }



    /**
	 * @description goes thorugh the visible cubes in this column and checks for collision.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
    checkForCollision() {
        var visibleCubes = this.column.visibleCubes();
        if (visibleCubes.length > 1) {
            for (var i = 0; i < visibleCubes.length; i++) {
                var cube1 = visibleCubes[i];
                for (var j = i + 1; j < visibleCubes.length; j++) {
                    var cube2 = visibleCubes[j];
                    if (cube1.visibility && cube2.visibility && luckyDivisor.util.checkForCollision(cube1, cube2)) {
                        cube1.collisionHandler.handleCollisionWith(cube2);
                    }
                }
            }
        }
    }
}