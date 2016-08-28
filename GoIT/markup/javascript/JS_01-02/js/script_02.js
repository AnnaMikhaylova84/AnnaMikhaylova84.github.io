var name = prompt('Hello! What is your name?');
alert('I will help you to calculate the function, ' + name);

var num = prompt('Enter Number');

if (isNaN(num))
{
	console.log('It is not a number. Try again.');
} else
	{
		console.log('Number = ', num);

		var exp = prompt('Enter Exponent');
		if (isNaN(exp))
		{
			console.log('Exponent is not a number. Try again.');

		} else
			{
				console.log('Exponent = ', exp);
				console.log('Result = ', pow(num, exp));

			}
	}

alert('Your result in console. Bye, ' + name);

function pow(num, exp)
{
	var result = num;
		if ( exp > 0)
		{
			while (exp > 1)
			{
				result = result * num;
				exp--;
			}
			return result;
		} else
			{
				if (exp < 0)
				{
					exp *= -1;
					while (exp > 1)
					{
	 					result = result * num;
	 					exp--;
	 				}
					return 1/result;
				} else
					{
						return result = 1;
					}
			}
}
