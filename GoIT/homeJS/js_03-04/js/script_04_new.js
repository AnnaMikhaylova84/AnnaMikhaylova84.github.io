// console.log(window);
// console.log(document);
// console.log(document.documentElement);
var body = document.body;
body.style.backgroundColor = 'rgb(252, 221, 211)';
var wrapper = document.createElement('div');
wrapper.className = wrapper.className + 'wrapper'; //added class
wrapper.style.fontFamily = 'Arial';
wrapper.style.fontSize = '20px';
wrapper.style.width = '500px';
wrapper.style.marginTop = 0;
wrapper.style.marginBottom = 0;
wrapper.style.marginLeft = 'auto';
wrapper.style.marginRight = 'auto';
body.appendChild(wrapper);
var title = document.createElement('h1');
title.innerHTML = 'Тест по программированию';
title.style.fontSize = '22px';
title.style.textAlign = 'center';
wrapper.appendChild(title);
var content = document.createElement('div');
content.classList.add('content');
wrapper.appendChild(content);

var test = {
  question: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3', 'Вопрос №4'],
  answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4', 'Вариант ответа №5', 'Вариант ответа №6', 'Вариант ответа №7', 'Вариант ответа №8', 'Вариант ответа №9', 'Вариант ответа №10', 'Вариант ответа №11', 'Вариант ответа №12', 'Вариант ответа №13', 'Вариант ответа №14', 'Вариант ответа №15'],
  rightAnswers: ['Вариант ответа №2', 'Вариант ответа №4', 'Вариант ответа №5', 'Вариант ответа №8', 'Вариант ответа №12'],
  questionOfTest: function() {
    this.question.length;
    var newAnswers = this.answers;

    for (var i = 0; i < this.question.length; i++) {
      var questionNum = document.createElement('ol');
      questionNum.innerHTML = (i + 1) + '. ' + this.question[i];
      questionNum.classList.add('question');
      questionNum.style.marginTop = '20px';
      questionNum.style.marginLeft = '20px';
      content.appendChild(questionNum);

      for (var j = 0; j < 3; j++){
        var answersLi = document.createElement('li');
        answersLi.classList.add('answers_li');
        answersLi.style.listStyle = 'none';
        questionNum.appendChild(answersLi);
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.marginLeft = '70px'
        checkbox.style.width = '13px';
        checkbox.style.height = '13px';
        checkbox.classList.add('checkbox');
        answersLi.appendChild(checkbox);
        var answersNum = document.createElement('label');
        answersNum.innerHTML = newAnswers[j];
        answersNum.classList.add('answers');
        answersNum.style.marginTop = '5px'
        answersNum.style.fontSize = '17px'
        answersLi.appendChild(answersNum);
      }
    newAnswers = newAnswers.slice(j);
    }
  } // function ()
} //  obj test{}

test.questionOfTest();

var button = document.createElement('input');
button.type = 'submit';
button.value = 'Проверить мои результаты';
button.classList.add('btn');
button.style.width = '300px';
button.style.height = '50px';
button.style.fontSize = 18 + 'px';
button.style.display = 'block';
button.style.marginTop = '10px';
button.style.marginBottom = '20px';
button.style.marginLeft = 'auto';
button.style.marginRight = 'auto';
button.style.borderWidth = 1,5 + 'px';
button.style.borderStyle = 'solid';
button.style.borderColor = 'black';
button.style.borderRadius = '5px';
button.style.backgroundColor = 'rgb(184, 188, 236)';
button.style.transition = '.3s';
wrapper.appendChild(button);
//
// button.onmousedown = function(){
//   // console.log('mouse DOWN');
//   button.style.backgroundColor = 'rgb(171, 223, 200)';
// };
//
// button.onmouseup = function(){
//   // console.log('mouse UP ');
//   button.style.backgroundColor = 'rgb(150, 15, 233)';
//   button.value = 'цвет не возвращается';
// };
var check = document.querySelectorAll('.checkbox');
var arr = [];
var yourRightAnswers = [];

function comparison(event){
  for (var i = 0; i < check.length; i++) {
    if (event.target == check[i] ) {
      var elemMyChoice = check[i].nextSibling.textContent;
      console.log('elemMyChoice = ', elemMyChoice);
      function elemOut() {
        for (var a = 0; a<arr.length; a++) {
          console.log('arr[' + a + '] = ' + arr[a]);
          var elemArr = arr[a];
          if (elemMyChoice == elemArr) {
            console.log('elemMyChoice = ', elemMyChoice);
            console.log('elemArr = ', elemArr);
            // arr.pop(arr[elemArr]);
            console.log('arr_POP = ', arr.pop(arr[elemArr]));
            // } else {
            //   console.log('');
            //   console.log('');
            //   arr.push(elemMyChoice);
            //
          } else {
          arr.push(elemMyChoice);
        }
      // console.log('arr_POP = ', arr.pop(arr[elemArr]));
      // console.log('arr_push = ', arr);

      }
    }
  console.log('arr = ', arr);
}}}


function someClick(event){
  if (event.target === button){
    console.log('you clicked BUTTON !!');
    // button.style.backgroundColor = 'rgb(171, 223, 200)'; //цвет должен меняться и возвращаться
    console.log('rightAnswers = ', test.rightAnswers);
    console.log('         arr = ', arr );
    exam();
    arr = [];
   }
   return;
}

function exam() {
  for (var j = 0; j < test.rightAnswers.length; j++) {
    console.log('');
    console.log('----- test.rightAnswers[' + j + '] = ' + test.rightAnswers[j] + ' -----');
    console.log('');
    var checkPoint = test.rightAnswers[j]
    for (var k = 0; k < arr.length; k++) {
      console.log('arr [' + k + '] = ' + arr[k]);
      var arrPoint = arr[k];
      if (checkPoint == arrPoint) {
        console.log('rightAnswer !!! ');
        console.log(' -- BREAK -- ');
        yourRightAnswers.push(arrPoint);
        break;
      } else {
        console.log('NO - NO -NO ');
        console.log(' .....continue .....');
        continue;
      }
    }
  }
  if (yourRightAnswers.length > 0) {
    console.log('+++++++++++++++++++++++++++');
    console.log('Your right answers : ', yourRightAnswers);
    alert('Your right answers : ' + yourRightAnswers);
    yourRightAnswers = [];
  } else alert('No right answers!');
}

window.addEventListener('click', someClick);
window.addEventListener('click', comparison);


// console.log(document.documentElement);

// console.log(body);
