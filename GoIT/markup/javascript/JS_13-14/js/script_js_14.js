$(function() {
"use strict";

var page = $('#page').html();

var test = {
    question1: {
        'title': 'Что обозначает директива ‘use strict’?',
        'answers': [
            'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.',
            'Код данного скрипта будет обработан по строгим правилам стандарта HTML5.',
            'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.'
        ],
        'check': 0
    },
    question2: {
        'title': 'К какому участку скрипта применяется строгие правила ‘use strict’?',
        'answers': [
            'Строгие правила работают между директивами ‘use strict’ и ‘strict end’.',
						'Либо во всем скрипте, либо в отдельной функции.',
            'Во всем скрипте.'
        ],
        'check': 1
    },
    question3: {
        'title': 'Для чего используется конструкция try-catch в javascript?',
        'answers': [
            'Для генерирования ошибок.',
            'В строгом режиме весь код необходимо оборачивать в try-catch.',
						'Для обработки возможных ошибок'
        ],
        'check': 2
    }
};

var localTest = JSON.stringify(test);
localStorage.setItem("easyTest", localTest);
localTest = localStorage.getItem("easyTest");

var testParse = JSON.parse(localTest);

var content = $('form');
content.html(tmpl(page, test));

var searchOfQuestions;
var text;
var point;
var count = 0;
var modalWrap = $('<div>').addClass('modalWrap').appendTo('body');
var modal = $('<div>').addClass('modal').appendTo('.modalWrap');
var modalInside = $('<div>').addClass('modalInside').appendTo('.modal');

function modalOpen() {
    if (count == 1) {
        point = ' правильный ответ';
    } else {
        point = ' правильных ответа';
    }
    modalWrap.show();
    modalInside.html(count + point);
    modal.show();
    modalInside.show();
}

function modalCLose() {
    count = 0;
    modalWrap.hide();
    modal.hide();
    modalInside.hide();
}

$('.button').on('click', function(e) {
    e.preventDefault(e);
    modalCLose();

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            searchOfQuestions = 'question' + (i + 1) + '_' + (j + 1);
            if ($('input#' + searchOfQuestions).is(":checked")) {
                text = $("label[for='" + searchOfQuestions + "']").html();

                if (text == test.question1.answers[test.question1.check]) {
                    count++;
                }
                if (text == test.question2.answers[test.question2.check]) {
                    count++;
                }
                if (text == test.question3.answers[test.question3.check]) {
                    count++;
                }
            }
        }
    }
    modalOpen();
});

$('.modalWrap').on('click', function(e) {
    if ($('input:checked')) {
        $("input:checked").removeAttr('checked');
    }
    modalCLose();
});

});
