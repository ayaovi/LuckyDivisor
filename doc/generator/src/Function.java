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
	private final String FUNCTION_NAME;
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
		FUNCTION_NAME = _extractFunctionSignature(name);
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
	public String getName()
	{
		return FUNCTION_NAME;
	}


	/**
	 * @description returns the header of this function.
	 *
	 * @param none.
	 *
	 * @return function description as a string.
	 */
	public String getHeader()
	{
		return FUNCTION_HEADER;
	}

	public int compareTo(Function otherFunction)
	{
		return this.getName().compareTo(otherFunction.getName());
	}

	public String toString()
	{
		return (this.getHeader() + "\n" + this.getName());
	}
}