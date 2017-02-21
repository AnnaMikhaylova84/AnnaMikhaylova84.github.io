// var name, admin;
//
// name = "Vasiliy";
// admin = name;
// alert( admin );
// --------------------------
// var hi = confirm( 'Давай познакомимся! *)' );
// if (hi == true) {
//   var name = prompt( 'Как тебя зовут?', '' );
//   alert('Привет, ' + name);
// } else {
//     alert('Тогда ПРОЩАЙ, незнакомец..');
//   }
// --------------------------
// var question = prompt('Какое «официальное» название JavaScript?', '');
// if (question == 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? «ECMAScript»!');
// }
// --------------------------
// var num = prompt('Enter a number:', '');
// if (num > 0) {
//   alert( 1 );
// } else if (num < 0) {
//          alert( -1 );
//        } else {
//           alert( 0 );
//          }
// -------------------------
// var a = 3, b = 2, result;
// (a + b < 4) ? result = 'Мало' : result = 'Много';
// console.log(result);
// -------------------------
// var login = 'Guru';
// var message = (login == 'Вася') ? message = 'Привет':
// (login == 'Директор') ? message = 'Здравствуйте':
// (login == '') ? message = 'Нет логина' : message = 'Ты кто?';
//
// console.log(login);
// console.log(message);
// ---------------------------
// var i = 1;
// for (i; i <= 10; i++) {
//   if (i % 2 == 1) continue;
//   alert('четное число ' +   i);
// }
// -----------------------------------
// var i = 0;
//   while ( i < 3 ) {
//   alert( "номер " + i + "!" );
//   i++;
// }
// ----------------------------------
// do {
//   var num = prompt('Enter number >100 :', '');
// } while (num <= 100 && num != null);
// alert('ok!');
 // --------------------------------------
// var n = prompt('Ведите число, до которого перебрать простые числа: ', '');
// console.log('Простые числа от 2 до ' + n);
// // var arr = [], k = 0;
// num:
// for (var i = 2; i < n; i++) {
//       for (var j = 2; j < i; j++) {
//         if (i % j == 0 ) continue num;
//       }
//
//       alert( 'Простое число :  ' + i );
//       console.log('Простое число :  ' + i );
//       // arr(k) = i;
//       // k++;
//       // console.log(arr);
//     }
// -----------------------------------
// var browser = prompt('What browser is it?', '');
// if (browser === 'IE') {
//   alert( 'О, да у вас IE!' );
// } else if (browser === 'Chrome'
//         || browser === 'Firefox'
//         || browser === 'Safari'
//         || browser === 'Opera') {
//           alert( 'Да, и эти браузеры мы поддерживаем' );
//        } else {
//           alert( 'Мы надеемся, что и в вашем браузере все ок!' );
//          }
// -----------------------------------
// switch (browser) {
//   case 'IE':
//     alert( 'О, да у вас IE!' );
//     break;
//
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Да, и эти браузеры мы поддерживаем' );
//     break;
//
//   default:
//     alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }
// ------------------------------------
// switch ( a = +prompt('a?', '') ) {
//   case 0:
//     alert( 0 );
//     break;
//   case 1:
//     alert( 1 );
//     break;
//   case 2 || 3:
//     alert( '2,3' );
//     break;
//   default:
//     alert('try again');
// }
// -----------------------------------
// function min(a, b) {
//   if (a > b) {
//     // alert( b );
//     console.log(b);
//     return b;
//   }
//   // alert( a );
//   console.log(a);
//   return a;
// }
// min(2, 5) == 2;
// min(3, -1) == -1;
// min(1, 1) == 1;
// ------------------------------------
// var x = prompt('число : ', ''),
//     y = prompt('степень : ', '');
// if (y <= 1) {
//   alert('введите степень выше 1');
// } else alert(x + ' в степени ' + y + ' = ' + pow(x, y));
//
// function pow(x, y) {
//   var result = x;
//   for (var i = 1; i < y; i++) {
//     result *= x;
//   }
//   return result;
// }
// ---------------------------------
// function sumTo(n) {
//   var result = 0;
//   for (var i = 1; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }
// var n = +prompt('number : ', '');
// if (n > 0) {
//   alert('sumTo = ' + sumTo(n));
// } else alert('try again');
// --------------------------------
// function sumTo(n) {
//   if (n > 1) {
//     return n + sumTo(n - 1);
//   } else {
//     return n;
//   }
// }
// var n = +prompt('number : ', '');
// alert('sumTo = ' + sumTo(n));
// -----------------------------------
// function sumTo(n) {
//   return n * (n + 1) / 2;
// }
// var n = +prompt('number : ', '');
// alert('sumTo = ' + sumTo(n));
// --------------------------------------
// function factorial(n) {
//   if (n > 0) {
//     return n * factorial(n - 1);
//   } else return 1;
// }
// alert('factorial ( ' + n + ' ! ) = ' + factorial(n));
// ----------------------------------------
// function fib(n) {
//   return n > 1 ? fib(n - 1) + fib(n - 2) : n;
// }
// alert('число Фибоначчи для ( n = ' + n + ' ) ==> ' + fib(n));
// ----------------------------------------
// var firstNum = prompt('enter first number :', ''),
//     secondNum = prompt('enter second number :', '');
// function sum(firstNum, secondNum) {
//   firstNum = parseInt(firstNum);
//   secondNum = parseInt(secondNum);
//   return firstNum + secondNum;
// }
// if (isNaN(firstNum)) {
//   alert('"' + firstNum + '" - it is not number!');
// } else if (isNaN(secondNum)) {
//   alert('"' + secondNum + '" - it is not numbers!');
//        } else alert(firstNum + ' + ' + secondNum + ' = ' + sum(firstNum, secondNum));
// --------------------------------------------
// var num = prompt('число с десятичной частью :', '');
// console.log(num);
// function  getDecimal(num) {
//   var str = '' + num;
//   console.log('typeof str = ', typeof str);
//   point = str.indexOf('.');
//   console.log("str.indexOf('.') = ", point);
//   if ( ~point ) {  //  тоже самое , что и( point !== -1 )
//   numPart = +str.substring(point);
//   console.log('str.substring(point) = ', numPart);
//   console.log('typeof numPart = ', typeof numPart);
//   return numPart;
//   } else {
//     console.log('нет дробной части');
//     return 0;
//   }
// }
// alert(getDecimal(num));
// ---------------------------------------
/* Bозвращает строку str с заглавным первым символом. */

// var str = prompt('Enter name:', '');
// console.log('entered name: ', str);
// alert( ucFirst(str) );
//
// function ucFirst(str) {
//   if ( !str ) return str;   //  !!! ПРОВЕРКА НА ПУСТУЮ СТРОКУ
//   str = str.trim();
//   console.log('after trim: ', str);
//   console.log('');
//   first = str[0].toUpperCase();
//   console.log(first);
//   // all = str.substring(1);
//   all = str.slice(1); // тоже что и str.substring(1)
//   console.log('+');
//   console.log(all);
//   console.log('=');
//   newStr = first + all;
//   console.log(newStr);
//   return newStr;
// }
// ---------------------------------------
/*  Проверяет длину строки str, и если она
превосходит maxlength – заменяет конец str на "...", так
чтобы ее длина стала равна maxlength.
 Она используется, чтобы усекать слишком длинные темы сообщений.  */
// var str = prompt('Enter text: ', ''),
//     maxlength = 20;
// alert( truncate(str, maxlength) );
//
// function truncate(str, maxlength) {
//   if ( maxlength > str.length ) return str;
//   // newStr = str.substring(0, 16) + '...';
//   newStr = str.slice(0, maxlength - 3) + '...';
//   return newStr;
// }
// ---------------------------------------
/* Напишите функцию checkSpam(str), которая возвращает true,
если строка str содержит „viagra“ или „xxx“, а иначе false.
Функция должна быть нечувствительна к регистру */

// var str = prompt('Enter text besides „viagra“ or „xxx“ :', '');
// console.log(str);
// alert( checkSpam(str) );
//
// function checkSpam(str) {
//   str = str.toLowerCase();
//   return !!( ~str.indexOf('viagra') || ~str.indexOf('xxx') );
// }
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
// ---------------------------------------
// var price = prompt('Enter price :', '');
// alert('number : ' + extractCurrencyValue(price));
//
// function extractCurrencyValue(price) {
//   newPrice = +price.slice(1);
//   console.log(newPrice);
//   return newPrice;
// }
// ---------------------------------------
// alert( !!confirm('Ты человек?') );
// ---------------------------------------
// var person = {};
// person.name = 'Vasya';
// person.surname = 'Petrov';
// person['name'] = 'Sergey';
// person.gender = 'male';
// person.age = 25;
// person.growth = 183;
// person.weight = 89;
// person.sity = 'Kiev';
// delete person.weight;
// var i = 0;
// for (var key in person) {
//   i++;
//   console.log(key + ' : ' + person[key]);
// }
// console.log('counter of properties: ' + i);
// console.log(Object.keys(person).lenght);
// ---------------------------------------
var obj = {
  name: 'Vasya',
  surname: 'Petrov',
  gender: 'male',
  age: 25,
  growth: 183,
  weight: 89,
  sity: 'Kiev'
};
// alert(isEmpty(obj));
// function isEmpty(obj) {
//   var i = 0;
//   for (var key in obj) {
//     i++;
//     console.log(key + ' : ' + obj[key]);
//     // return false;
//   }
//   console.log('i = ', i);
//   // return true;
//   return (i > 0) ? false : true;
// };
// ---------------------------------------
var cash = {};
cash['Masha'] = 100;
cash.Vasya = 300;
cash['Petya'] = 250;
cash['Katya'] = 400;
cash.Liza = 150;
// console.log(cash.Vasya + cash.Masha + cash.Petya);
// console.log('');
// var key, sum = 0;
// for (key in cash){
//   sum += cash[key];
//   // console.log('sum = ', sum);
// }
// console.log('all sum = ', sum);
// ---------------------------------------
// var maxCash = 0;
// for (key in cash) {
//   if (cash[key]> maxCash) {
//     maxCash = cash[key];
//     var maxMan = 'max cash : ' + key;
//     // console.log('max  ' + key + ' : ' + maxCash);
//   } else continue;
// }
// console.log(maxMan || 'nobody');
// ---------------------------------------
// var menu = {
//   width: 200,
//   height: 300,
//   age: 25,
//   title: "My menu"
// };
// console.log(menu);
// multiplyNumeric(menu);
// console.log(menu);
// console.log(cash);
// multiplyNumeric(cash);
// console.log(cash);
// function multiplyNumeric(obj) {
//   for (var key in obj) {
//     if ( !isNaN(parseFloat(obj[key])) && isFinite(obj[key]) ) {
//       obj[key] = obj[key] * 2;
//     } else continue;
//   }
//   return;
// }
// ------------------------------------------------
// var time = {
//   year: 2345,
//   month: 11,
//   day: 10,
//   hour: 11,
//   minute: 12,
//   second: 13,
//   microsecond: 123456
// }
//
// console.log(time); // (*)
// time.day++; // (**)
//
// console.log(time);
// time.day++;
//
// console.log(time);
// time.day++;
// console.log(time);
// -----------------------------------------
// var goods = [1, 3, 8, 'test', 'abc'];
// console.log('arr = ', goods);
// console.log('last element = ' + goods[goods.length - 1]);
// // goods.push('computer');
// goods[goods.length] = 'computer';
// console.log(goods);
// console.log('goods.length = ', goods.length);
// -----------------------------------------
  // var muz = ['Джаз', 'Блюз'];
  // console.log(muz);
  // muz.push('Рок-н-Ролл');
  // console.log(muz);
  // muz[muz.length - 2] = 'Классика';
  // console.log(muz);
  // console.log(muz.shift());
  // console.log(muz);
  // muz.unshift('Рэп', 'Регги');
  // console.log(muz);
// -----------------------------------------
/* Kод для вывода случайного значения из массива:*/

// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// var min = 0, max = arr.length - 1;
// var rand = min + Math.floor(Math.random() * (max + 1 - min));
// console.log('===================> ', arr[rand]);
// console.log('rand = ', rand);
// max = muz.length - 1;
// var rand = min + Math.floor(Math.random() * (max + 1 - min));
// console.log('===================> ', muz[rand]);
// console.log('rand = ', rand);
// -----------------------------------------
// var arr = [];
// do {
//   var num = +prompt('enter number: ', '');
//   console.log(typeof num);
//   arr.push(num);
// } while ( num !='' && num != null && !isNaN(num));
//   console.log(arr);
//   console.log(arr.pop());
//   console.log(arr);
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log('sum = ', sum);
// -----------------------------------------
/* Функция find(arr, value) ищет в массиве arr значение value
и возвращает его номер, если найдено, или -1, если не найдено.*/

var arr = ['test', 2, 1.5, false, 7, 'hello', true, 5.6, 'xoxo'];
console.log(arr);
// var value = prompt('value : ', '');
// console.log('value = ', value);
// console.log(find(arr, value));
// function find(arr, value) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == value) return i;
//   }
//   return -1;
// }

// -----------------------------------------
/*  Функция filterRange(arr, a, b) принимает массив чисел arr и
возвращает новый массив из диапазона от a до b.  */
// a ≤ arr[i] ≤ b
// var a = prompt('OT a', ''),
//     b = prompt('DO b', '');
// var a = 2,
//     b = 6;
//     console.log('from a = ', a);
//     console.log(' to  b = ', b);
// console.log('');
// var filtered = filterRange(arr, a, b);
// alert(filtered);
//
// function filterRange(arr, a, b) {
//   var result = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (a <= arr[i] & arr[i] <= b) result.push(arr[i]);
//   }
//   console.log('result = ', result);
//   console.log('arr = ', arr); // arr[] не изменился
//   return result;
// }
// -----------------------------------------
// var arr = [1, 2];
// var newArr = arr.concat(3, 4);
// arr.reverse();

console.log( 'arr.indexOf(0) = ', arr.indexOf(0) );
console.log( 'arr.indexOf(false) = ', arr.indexOf(false) );
console.log( 'arr.indexOf("hello") = ', arr.indexOf("hello") );
console.log( 'arr.indexOf(5.6) = ', arr.indexOf(5.6) );
console.log( 'arr.indexOf("true") = ', arr.indexOf("true") );

console.log( arr );
// -----------------------------------------

// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
