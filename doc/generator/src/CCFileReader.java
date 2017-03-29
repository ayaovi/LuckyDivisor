/**
 * @file CCFileReader.java
 * 
 * @description Reads the content of a file and returns it as a list of strings.
 * 
 * @author Ayaovi Espoir Djissenou
 * 
 * @version v1
 */


package luckyDivisor.doc;

import java.io.*;
import java.util.List;
import java.util.ArrayList;

public class CCFileReader 
{
    /**
	 * @description reads the content of a source file into a list of string.
	 *
	 * @param String sourceFile.
	 *
	 * @return List<String>.
	 */
	public static List<String> readSourceFile(String sourceFile)
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
}