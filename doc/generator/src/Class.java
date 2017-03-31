/**
 * @file Function.java
 * 
 * @description A Function has a name and a header.
 * 
 * @author Ayaovi Espoir Djissenou
 * 
 * @version v1
 */


package luckyDivisor.doc;

import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;

public class Class implements Comparable<Class> {
    /**
     * Instance variables.
     */
    private final String _name;
    private List<Function> _functions;

    public Class(String name) {
        _name = name;
        _functions = new ArrayList<Function>();
    }



    /**
	 * @description returns the contructor of this class if it does exist.
	 *
	 * @param none.
	 *
	 * @return Function.
	 */
    public Function getConstructor() {
        /**
         * Because everything in the file would be treated as function, the constructor would be the function with the word <constructor> in its signature.
         */
        for (Function function : _functions) {
            if (function.getSignature().indexOf("constructor") != -1) {
                return function;
            }
        }
        return null;
    }




    /**
	 * @description returns the name of the class.
	 *
	 * @param none.
	 *
	 * @return String name.
	 */
    public String getName() {
        return _name;
    }


    /**
	 * @description adds a function to the list of functions in this class.
	 *
	 * @param Function function.
	 *
	 * @return none.
	 */
    public void addFunction(Function function) {
        _functions.add(function);
    }



    /**
	 * @description required by the comparable interface.
	 *
	 * @param Function function.
	 *
	 * @return none.
	 */
    public int compareTo(Class otherClass)
	{
		return this.getName().compareTo(otherClass.getName());
	}


    /**
	 * @description adds a function to the list of functions in this class.
	 *
	 * @param Function function.
	 *
	 * @return none.
	 */
    public String toString() {
        StringBuilder representation = new StringBuilder();
        representation.append("===================== Class: " + _name + " =====================\n");
        for (Function function : _functions) {
            representation.append(function + "\n\n");
        }
        return representation.toString();
    }
}