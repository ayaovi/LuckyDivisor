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

		for (String file : listOfFiles) {
			List<String> sourceFileContent = CCFileReader.readSourceFile(file);
			_process(sourceFileContent);
		}

		Collections.sort(_functionsInClass);
		Collections.sort(_classes);

		_generateAllClassesHTML();
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
		String startHeaderTag = "<!DOCTYPE html>\n<html>\n<head>\n\t<title>\n\t\tLuckyDivisor API Documentation\n\t</title>";
		// String startOfScriptTag = "<script language=\"javascript\" type=\"text/javascript\">\n";
		// String endOfScriptTag = "\n<script/>";
		String startBodyTag = "\n</head>\n<body>\n";
		String allClassTable = _generateAllClassesTable();
		String endBodyTag = "</body>\n";
		String endHeaderTag = "</html>";

		String content = startHeaderTag + startBodyTag + allClassTable + endBodyTag + endHeaderTag;

		CCFileWriter.writeToFile(content, "../../apidoc/index.html");
	}



	/**
	 * @description generates the HTML of all classes in the game.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	private static void _generateAllClassesHTML() {
		for (Class aClass : _classes) {
			_generateClassHTML(aClass);
		}
	}



	/**
	 * @description generates the HTML of a particular class.
	 *
	 * @param none.
	 *
	 * @return none.
	 */
	private static void _generateClassHTML(Class aClass) {
		String startHeaderTag = "<!DOCTYPE html>\n<html>\n<head>\n\t<title>\n\t\tLuckyDivisor API Documentation\n\t</title>";
		String startBodyTag = "\n</head>\n<body>\n";
		String allClassTable = _generateAllMethodsTable(aClass);
		String endBodyTag = "</body>\n";
		String endHeaderTag = "</html>";
		String content = startHeaderTag + startBodyTag + allClassTable + endBodyTag + endHeaderTag;

		CCFileWriter.writeToFile(content, "../../apidoc/" + aClass.getName().toLowerCase() + ".html");
	}



	/**
	 * @description generates a table of all method in a class to be written to an HTML file.
	 *
	 * @param none.
	 *
	 * @return string.
	 */
	private static String _generateAllMethodsTable(Class aClass) {
		String myTable = "<table>\n\t<tr>\n\t\t<td style='width: 200px; color: green; font-weight:bold'>Modifier and Types</td>\n";
		myTable += "\t\t<td style='color: green; text-align: left; font-weight:bold'>Method and Description</td>\n\t</tr>\n";

		myTable += "\t<tr>\n\t\t<td style='width: 200px;'></td>\n";
		myTable += "\t\t<td style='text-align: left;'></td>\n\t</tr>\n";

		List<Function> functions = aClass.getFunctions();

		for (Function function : functions) {
			myTable += "\t<tr>\n\t\t<td style='width: 200px;'>" + function.getReturnType() + "</td>\n";
			myTable += "\t\t<td style='text-align: left; font-weight:bold'>" + function.getSignature() + "</td>\n\t</tr>\n";
			myTable += "\t<tr>\n\t\t<td style='width: 200px;'></td>\n";
			myTable += "\t\t<td style='text-align: left;'>" + function.getDescription() + "</td>\n\t</tr>\n";

			myTable += "\t<tr>\n\t\t<td style='width: 200px;'></td>\n";
			myTable += "\t\t<td style='text-align: left;'></td>\n\t</tr>\n";
		}

		myTable += "</table>\n";

		return myTable;
	}



	/**
	 * @description generates a table to be written to an HTML file.
	 *
	 * @param none.
	 *
	 * @return string.
	 */
	private static String _generateAllClassesTable() {
		String myTable = "<table>\n\t<tr>\n\t\t<td style='width: 200px; color: green; font-weight:bold'>Classe</td>\n";
		myTable += "\t\t<td style='color: green; text-align: left; font-weight:bold'>Description</td>\n\t</tr>\n";

		myTable += "\t<tr>\n\t\t<td style='width: 200px;'></td>\n";
		myTable += "\t\t<td style='text-align: left;'></td>\n\t</tr>\n";

		for (Class aClass : _classes) {
			myTable += "\t<tr>\n\t\t<td style='width: 200px;'>" + "\n\t\t\t<a href=\"" + aClass.getName().toLowerCase() + ".html\">" + aClass.getName() + "</a>\n\t\t</td>\n";
			myTable += "\t\t<td style='text-align: left;'>" + aClass.getDescription() + "</td>\n\t</tr>\n";
			
			myTable += "\t<tr>\n\t\t<td style='width: 200px;'></td>\n";
			myTable += "\t\t<td style='text-align: left;'></td>\n\t</tr>\n";
		}

		myTable += "</table>\n";

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
	 * @description goes through the content of a source file and extracts the function/method headers. It expects the function/method header to be in a spacial format.
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
				String classHeader = _extractFileHeader(content);
				String words[] = currentLine.trim().split(" ");
				_classes.add(new Class(words[1], classHeader));
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
	 * @description extracts the header of the files.
	 *
	 * @param String> content, int index.
	 *
	 * @return String header.
	 */
	private static String _extractFileHeader(List<String> content) {
		String header = "";
		boolean locatedHeaderBeginning = false;

		for (int i = 0; i < content.size() - 1; i++) {
			String currentLine = content.get(i);
			String nextLine = content.get(i + 1);

			if (currentLine.trim().startsWith("/**")) {
				if (nextLine.trim().startsWith("* @file")) {
					header += " " + currentLine.trim() + "\n";
					locatedHeaderBeginning = true;
				}
			}
			else if (locatedHeaderBeginning) {
				if (!currentLine.trim().startsWith("*/")) {
					header += " " + currentLine.trim() + "\n";
				}
				else {
					header += " " + currentLine.trim() + "\n";
					break;
				}
			}
		}

		return header;
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