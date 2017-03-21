var luckyDivisor = luckyDivisor || {};

luckyDivisor.util.math = {};

/**
 * @description A function that adds two RGN colours.
 *
 * @param rgb1 and rgb2 which are two RGB colours.
 *
 * @retun an RGB colour that is a combination of rgb1 and rgb2.
 */
luckyDivisor.util.math.addRGBs = function(rgb1, rgb2)
{
	var lab1 = luckyDivisor.util.cube.RGBtoLAB([red(rgb1), green(rgb1), blue(rgb1)]);
	var lab2 = luckyDivisor.util.cube.RGBtoLAB([red(rgb2), green(rgb2), blue(rgb2)]);

	var resultingLab = [];
	for (var i = 0; i < lab1.length; i++) 
	{
		resultingLab[i] = (lab1[i] + lab2[i]) / 2.0;
	}

	return luckyDivisor.util.cube.LABtoRGB(resultingLab);
}