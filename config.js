// A function to check whether a number is prime.
function isPrime(number)
{
	//var outcome = false;
	
	if (number <= 0)
	{
		return false;
	}
	else if (number == 1 || number == 2)
	{
		return true;
	}
	else
	{
		var endOfRange = floor(sqrt(number));
		var i = 0;
		
		while (i <= endOfRange)
		{
			if (number % i == 0)
			{
				return false;
			}
			i++;
		}
		return true;
	}
}

function combineColours(divisors)
{
	
}

function gameOver()
{
	// TODO : Reset all the necessary stuff.
}

function pause()
{
	// If possible Stack() everything.
}

function keyPressed()
{
	if (keyCode == LEFT_ARROW)
	{
		// Move player's cube one unit to the left.
	}
	else if (keyCode == RIGHT_ARROW)
	{
		// Move player's cube one unit to the right.
	}
}