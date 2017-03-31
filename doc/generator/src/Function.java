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

public class Function implements Comparable<Function>
{
	/**
	 * Instance variables.
	 */
	private final String FUNCTION_SIGNATURE;
	private final String FUNCTION_HEADER;

	/**
	 * @description a function requires a name and description.
	 *
	 * @param a header and a name.
	 *
	 * @return none.
	 */
	public Function(String header, String name)
	{
		FUNCTION_SIGNATURE = _extractFunctionSignature(name);
		FUNCTION_HEADER = header;
	}



	private String _extractFunctionSignature(String name) {
		String functionSignature = name;

		if (name.startsWith("function ")) {
			functionSignature = name.substring(9).trim();
		}
		else if (name.indexOf("= function") != -1) {
			int index = name.indexOf("= function");
			functionSignature = name.substring(0, index).trim() + name.substring(index + 10).trim();
		}

		if (functionSignature.indexOf("{") != -1) {
			int index = functionSignature.indexOf("{");
			functionSignature = functionSignature.trim().substring(0, index).trim() + "\n";
		}
		return functionSignature;
	}



	/**
	 * @description returns the name of this function.
	 *
	 * @param none.
	 *
	 * @return function name as a string.
	 */
	public String getSignature() {
		return FUNCTION_SIGNATURE;
	}


	/**
	 * @description returns the header of this function.
	 *
	 * @param none.
	 *
	 * @return function description as a string.
	 */
	public String getHeader() {
		return FUNCTION_HEADER;
	}




	/**
	 * @description returns the return type of this function.
	 *
	 * @param none.
	 *
	 * @return String.
	 */
	public String getReturnType() {
		String lines[] = this.getHeader().split("\\*");

		for (String line : lines) {
			if (line.trim().startsWith("@return")) {
				String words[] = line.trim().split(" ");
				return (words.length > 1) ? words[1].trim() : null;
			}
		}
		return null;
	}



	/**
     * @description returns the description of the class.
     *
     * @param none.
     *
     * @return String description.
     */
    public String getDescription() {
        String header = this.getHeader();
        int index1 = header.indexOf("@description");
        int index2 = header.indexOf("@param");
        return (index2 > index1) ? header.substring(index1 + 12, index2) : "";
    }




	/**
	 * @description required by the comparable interface.
	 *
	 * @param Function function.
	 *
	 * @return none.
	 */
	public int compareTo(Function otherFunction)
	{
		return this.getSignature().compareTo(otherFunction.getSignature());
	}



	/**
	 * @description returns a String representation of this function.
	 *
	 * @param String representation.
	 *
	 * @return none.
	 */
	public String toString()
	{
		return (this.getHeader() + "\n" + this.getSignature());
	}
}