import java.util.List;
import java.util.ArrayList;
import java.io.*;
import java.util.Collections;

public class APIGenerator
{
	/**
	 * Instance variables.
	 */
	private static final String PATH_TO_SRC = "../../src/";

	private static List<Function> _functionsInClass;


	/**
	 * @description the main method of the APIGenerator.
	 *
	 * @param a list of command line arguments.
	 *
	 * @return none.
	 */
	public static void main(String args[])
	{
		_functionsInClass = new ArrayList<Function>();

		List<String> sourceFileContent = _readSourceFile(PATH_TO_SRC + "main.js");

		System.out.println("Number of lines in source file is: " + sourceFileContent.size());

		_process(sourceFileContent);

		Collections.sort(_functionsInClass);

		System.out.println("Number of function in source file is: " + _functionsInClass.size());

		_writeToFile(_functionsInClass, "../apidoc/main.doc");
	}


	/**
	 * @description goes through the content of a source file and extracts the function/method headers.
	 * It expects the function/method header to be in a spacial format.
	 *
	 * @param List<String> content.
	 *
	 * @return none.
	 */
	private static void _process(List<String> content)
	{
		for (int i = 0; i < content.size() - 1; i++) 
		{
			String currentLine = content.get(i);
			String nextLine = content.get(i + 1);
			
			if (currentLine.trim().startsWith("/**"))
			{
				if (nextLine.trim().startsWith("* @description"))
				{
					_functionsInClass.add(_extractFunction(content, i));
				}
			}
		}
	}


	/**
	 * @description extracts a function/method header and signature, given the starting point of the function/method header.
	 *
	 * @param List<String> content, int index.
	 *
	 * @return Function.
	 */
	private static Function _extractFunction(List<String> content, int index)
	{
		String functionHeader = "";

		int i = 0;
		for (i = index; i < content.size(); i++) 
		{
			String currentLine = content.get(i);

			if (!currentLine.trim().startsWith("*/"))
			{
				functionHeader += currentLine + "\n";
			}
			else
			{
				functionHeader += currentLine;
				break;
			}
		}

		return new Function(functionHeader, content.get(i + 1) + "\n");
	}


	/**
	 * @description reads the content of a source file into a list of string.
	 *
	 * @param String sourceFile.
	 *
	 * @return List<String>.
	 */
	private static List<String> _readSourceFile(String sourceFile)
	{
		BufferedReader br = null;

		List<String> fileContent = new ArrayList<String>();

		try 
		{
			br = new BufferedReader(new FileReader(sourceFile));
			String line;

			while ((line = br.readLine()) != null) 
			{
				fileContent.add(line);
			}
		}
		catch (IOException e) 
		{
			e.printStackTrace();
		}
		finally 
		{
			try 
			{
				if (br != null)
				{
					br.close();
				}

			} 
			catch (IOException ex) 
			{
				ex.printStackTrace();
			}
		}

		return fileContent;
	}


	/**
	 * @description writes content to a file specified by fileName .
	 *
	 * @param List<Function> listOfFunctions, String fileName.
	 *
	 * @return none.
	 */
	private static void _writeToFile(List<Function> listOfFunctions, String fileName)
	{
		FileWriter fw  = null;

		try 
		{
			fw = new FileWriter(fileName);

			for(Function function : _functionsInClass)
			{
				fw.write(function.toString() + "\n");
			}

			fw.close();
		}
		catch (IOException x) 
		{
			System.err.format("IOException: %s%n", x);
		}
	}
}