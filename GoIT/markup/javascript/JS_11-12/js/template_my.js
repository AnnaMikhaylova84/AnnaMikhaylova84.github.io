$(function() {
	var template = $('#about').html();

	var info = {
      name : 'Михайлова Анна Владимировна',
      photo : '<img src="img/Im.jpg" height="128" alt="it is me">',
      job : 'Выпускник ХИРЭ 10тилетней давности',
			question : 'Хочу учить фронтенд, потому что:',
 			answers: ['Нужно развиваться', 'Это востребовано и перспективно', 'Нравится создавать нечто красивое и стильное'],
			phone: 'Мой контактный телефон',
			number: '+380668308206',
			facebook: 'Мой профиль facebook',
			link: ['<a href="https://www.facebook.com/anna.mikhaylova.948" target="_blank" title="lets be friend">facebook.com</a>'],
			feedback: 'Для хорошего настроения могу сделать открыточку в технике scrapbooking *)',

	};

	var content = tmpl(template, info);

	$('body').append(content);

});
