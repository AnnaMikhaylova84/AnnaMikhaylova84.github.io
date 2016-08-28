
var arr = [];

for ( var i = 0; i < 5; i++)
{
	var name =  prompt('Введите ' + (i + 1) + '-е имя:');
	// arr[i] = name;
	arr.push(name);

	console.log('Имя ' + (i + 1) + ' =>', name);

}

var nameUser = prompt('Введите имя пользователя:');
if (nameUser != arr[i])
{
	alert( nameUser + ', вы успешно вошли!');

} else
	{
		alert('Пользователь не найден. ');

	}

console.log('----------------------');
console.log('Username =>', nameUser);
