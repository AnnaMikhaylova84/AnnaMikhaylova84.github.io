// alert("Hello!!! it's ME!!")
var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.style.fontFamily = 'Arial';
wrapper.style.width = 500 + 'px';
wrapper.style.marginTop = 0;
wrapper.style.marginBottom = 0;
wrapper.style.marginLeft = 'auto';
wrapper.style.marginRight = 'auto';


document.body.appendChild(wrapper);
console.log(document.body);

var titleHead = document.createElement('div');
titleHead.classList.add('titleHead');
wrapper = document.querySelector('.wrapper');
wrapper.appendChild(titleHead);


var titleName = document.createElement('h1');
titleName.innerHTML='Тест по программированию';
titleName.style.fontFamily = 'Arial';
titleName.style.paddingTop = 10 + 'px';
titleName.style.paddingLeft = 100 + 'px';
titleName.style.paddingBottom = 10 + 'px';
titleName.style.fontSize = 18 + 'px';
titleHead.appendChild(titleName);



var test = {
	qwestion: ['Вопрос №1', 'Вопрос №2','Вопрос №3'],
	variant: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],

	qwestionOfTest : function() {
		var qwestionNum = this.qwestion.length;


		var qwestionDiv = document.createElement('div');
		wrapper.appendChild(qwestionDiv);

		var numberQwestion = document.createElement('ol');
		qwestionDiv.appendChild(numberQwestion);

		for (var i=0; i<qwestionNum; i++) {

		var qwestionLi = document.createElement('li');
		qwestionLi.innerHTML = this.qwestion[i];
		qwestionLi.style.paddingBottom = 10 + 'px';
		qwestionLi.style.paddingTop = 10 + 'px';
		qwestionLi.style.fontSize = 18 + 'px';
		numberQwestion.appendChild(qwestionLi);

		var qwestioUl = document.createElement('ul');
		numberQwestion.appendChild(qwestioUl);

		var variantUl = this.variant.length;

		for (var j=0; j<variantUl; j++) {

			var variantLi = document.createElement('li');
			variantLi.innerHTML = this.variant[j];
			variantLi.style.fontSize = 16 + 'px';
			variantLi.style.paddingLeft = 10 + 'px';
			variantLi.style.paddingBottom = 5 + 'px';
			qwestioUl.appendChild(variantLi);

			var checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			variantLi.insertBefore(checkbox, variantLi.firstChild);
		}
	}
	}
};

test.qwestionOfTest();
console.log(document.documentElement);


var button = document.createElement('input');
button.classList = 'button';
button.type = 'button';
button.value = 'Проверить мои результаты';
button.style.marginTop = 30 + 'px';
button.style.marginLeft = 100 + 'px';
button.style.paddingLeft = 30 + 'px';
button.style.paddingTop = 10 + 'px';
button.style.paddingRight = 30 + 'px';
button.style.paddingBottom = 10 + 'px';
button.style.borderWidth = 1,5 + 'px';
button.style.borderStyle = 'solid';
button.style.borderColor = 'black';
button.style.backgroundColor = 'lightblue';
wrapper.appendChild(button);
