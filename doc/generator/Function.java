

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
		FUNCTION_NAME = name;
		FUNCTION_HEADER = header;
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