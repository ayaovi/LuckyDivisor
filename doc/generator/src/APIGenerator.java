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

import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;

public class APIGenerator {
	/**
	 * Instance variables.
	 */
	private static final String DIRECTORIES[] = new String[]{"../../../src/", "../../../util/", "../../../config/"};

	private static List<Function> _functionsInClass;

	private static List<Class> _classes;

	/**
		<!DOCTYPE html>
		<html>
		<head>
			<title>
				
			</title>
		</head>
		<body>

		</body>
		</html>
	 */

	private static final String INDEX_PAGE_TITLE = "Overview (LuckyDivisor)";


	/**
	 * @description the main method of the APIGenerator.
	 *
	 * @param a list of command line arguments.
	 *
	 * @return none.
	 */
	public static void main(String args[]) {
		_functionsInClass = new ArrayList<Function>();
		_classes = new ArrayList<Class>();

		List<String> listOfFiles = _collectListOfFiles(DIRECTORIES);

		// System.out.println("There are " + listOfFiles.size() + " files.");
		// for (String file : listOfFiles) {
		// 	System.out.println(file);
		// }

		for (String file : listOfFiles) {
			List<String> sourceFileContent = CCFileReader.readSourceFile(file);
			// System.out.println("Number of lines in source file is: " + sourceFileContent.size());
			_process(sourceFileContent);
		}

		// List<String> sourceFileContent = CCFileReader.readSourceFile(PATH_TO_SRC + "main.js");
		// System.out.println("Number of lines in source file is: " + sourceFileContent.size());
		// _process(sourceFileContent);
		Collections.sort(_functionsInClass);
		Collections.sort(_classes);

		// System.out.println("Number of function in source file is: " + _functionsInClass.size());
		// CCFileWriter.writeToFile(_functionsInClass, "../../apidoc/functions.doc");

		// for (Class aClass : _classes) {
		// 	System.out.println(aClass);
		// }

		_generateIndexHTML();
	}


	/**
	 * @description generates the index.html file; which id the landing page for the apidocs.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	private static void _generateIndexHTML() {
		String part1 = "<!DOCTYPE html>\n<html>\n<head>\n\t<title>\n\t\tLuckyDivisor API Documentation\n\t</title>";
		String startOfScriptTag = "<script language=\"javascript\" type=\"text/javascript\">\n";
		String allClassTable = _generateAllClassesTable();
		String endOfScriptTag = "\n<script/>";
		String part2 = "\n</head>\n<body>\n</body>\n</html>";

		String content = part1 + startOfScriptTag + allClassTable + part2;
		CCFileWriter.writeToFile(content, "../../apidoc/index.html");
	}


	private static String _generateAllClassesTable() {
		String myTable = "<table>\n\t<tr>\n\t\t<td style='width: 200px; color: green;'>Classes</td>";
		myTable += "<td style='width: 100px; color: red; text-align: right;'>Description</td></tr>";

		myTable+="<tr><td style='width: 100px;                   '>---------------</td>";
		myTable+="<td     style='width: 100px; text-align: right;'>---------------</td></tr>";

		for (Class aClass : _classes) {
			myTable+="<tr><td style='width: 100px;'>" + aClass.getName() + "</td>";
			myTable+="<td style='width: 100px; text-align: right;'>" + "BLALALALLA" + "</td></tr>";
		}

		myTable+="</table>";

		return myTable;
	}



	/**
	 * @description collects the list of files in all given directories .
	 *
	 * @param String[] directories.
	 *
	 * @return List<String> listOfFiles.
	 */
	private static List<String> _collectListOfFiles(String directories[]) {
		List<String> listOfFiles = new ArrayList<String>();

		for (String directory : directories) {
			String listOfFilesInDirectory[] = CCFileProcessor.listOfFilesInDirectory(directory);
			if (listOfFilesInDirectory != null) {
				listOfFiles.addAll(Arrays.asList(listOfFilesInDirectory));
			}
		}
		return listOfFiles;
	}


	/**
	 * @description goes through the content of a source file and extracts the function/method headers.
	 * It expects the function/method header to be in a spacial format.
	 *
	 * @param List<String> content.
	 *
	 * @return none.
	 */
	private static void _process(List<String> content) {
		boolean isClass = false;
		for (int i = 0; i < content.size() - 1; i++) {
			String currentLine = content.get(i);
			String nextLine = content.get(i + 1);
			if (currentLine.trim().startsWith("class")) {
				/**
				 * The extract this class as a file.
				 */
				isClass = true;
				String words[] = currentLine.trim().split(" ");
				_classes.add(new Class(words[1]));
			}
			else if (currentLine.trim().startsWith("/**")) {
				if (nextLine.trim().startsWith("* @description")) {
					if (isClass) {
						_classes.get(_classes.size() - 1).addFunction(_extractFunction(content, i));
					}
					else {
						_functionsInClass.add(_extractFunction(content, i));
					}
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
	private static Function _extractFunction(List<String> content, int index) {
		String functionHeader = content.get(index).trim() + "\n";

		int i = 0;
		for (i = index + 1; i < content.size(); i++) {
			String currentLine = content.get(i);

			if (!currentLine.trim().startsWith("*/")) {
				functionHeader += " " + currentLine.trim() + "\n";
			}
			else {
				functionHeader += " " + currentLine.trim();
				break;
			}
		}
		return new Function(functionHeader, content.get(i + 1).trim() + "\n");
	}
}