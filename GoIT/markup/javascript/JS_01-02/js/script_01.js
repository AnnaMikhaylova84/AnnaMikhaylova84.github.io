var arr = [];

for ( var i = 0; i < 5; i++)
{
	var name =  prompt('Введите ' + (i + 1) + '-е имя:');
	// arr[i] = name;
	arr.push(name);

	console.log('Имя ' + (i + 1) + ' =>', name);
}

console.log('----------------------');
console.log('Entered names', arr);
console.log('----------------------');

function checkName()
{
var nameUser = prompt('Введите имя пользователя:');
var rightName;

for (var j = 0; j < 5; j++)
{
	if (nameUser == '' || nameUser == null)
	{
		alert('Нужно было ввести имя пользователя.');
		return checkName();

	} else
		if (nameUser == arr[j])
		{
			rightName = true;
			alert( nameUser + ', вы успешно вошли!');
			break;
		} else
			{
				rightName = false;
			}
}
if (rightName == false)
{
	alert('Пользователь не найден. ');
}
console.log('Username =>', nameUser);
}
checkName();
