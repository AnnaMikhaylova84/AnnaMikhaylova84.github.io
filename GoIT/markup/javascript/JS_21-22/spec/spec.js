var app = require('../js/app.js');  //команда require загружает указанный файл

describe("app", function() {
  it("sayHello()", function() {

	//prepare делаем подготовительеую работу
		var result;
		// console.log('app', app);
	//act вызываем метод
		result = app.sayHello('Vasya');
	//assert проверяем, правильно ли метод отработал
    // expect(result).toBe('Hello, Vasya');
    expect(result).toEqual('Hello, Vasya!');
  });
		it("sum()", function() {
			var result;
			result = app.sum('1, 2')
			expext(result).toEqual('3');
		});
});
