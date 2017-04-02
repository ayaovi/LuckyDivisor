/**
 * @file CCFileReader.java
 * 
 * @description Write some content to a file.
 * 
 * @author Ayaovi Espoir Djissenou
 * 
 * @version v1
 */


package luckyDivisor.doc;
import java.util.List;
import java.util.ArrayList;

import java.io.*;

public class CCFileWriter
{
    /**
	 * @description writes content to a file specified by fileName .
	 *
	 * @param List<Function> listOfFunctions, String fileName.
	 *
	 * @return none.
	 */
	public static void writeToFile(List<Function> listOfFunctions, String fileName)
	{
		FileWriter fw  = null;

		try 
		{
			fw = new FileWriter(fileName);

			for(Function function : listOfFunctions)
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

	public static void writeToFile(String content, String fileName) {
		FileWriter fw  = null;

		try {
			fw = new FileWriter(fileName);
			fw.write(content);
			fw.close();
		}
		catch (IOException x) {
			System.err.format("IOException: %s%n", x);
		}
	}
}