/**
 * @file APIGenerator.java
 * 
 * @description Generates the apidocs of the LuckyDivisor game.
 * 
 * @author Ayaovi Espoir Djissenou
 * 
 * @version v1
 */


package luckyDivisor.doc;

import java.io.File;

public class CCFileProcessor
{
    public static String[] listOfFilesInDirectory(String directory)
	{
		File fileDirectory = new File(directory);
        if (fileDirectory.exists()) {
            String listOfFilesInDirectory[] = fileDirectory.list();
            for (int i = 0; i < listOfFilesInDirectory.length; i++) {
                listOfFilesInDirectory[i] = directory + listOfFilesInDirectory[i];
            }
            return listOfFilesInDirectory;
        }
        return null;
	}
}