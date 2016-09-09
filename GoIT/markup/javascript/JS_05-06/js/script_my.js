var watchLeft = document.getElementById('watchLeft');
var startLeft = document.getElementById('startLeft');
var pauseLeft = document.getElementById('pauseLeft');
var clearLeft = document.getElementById('clearLeft');
var divMsecLeft = document.getElementById('msecLeft');

startLeft.style.paddingLeft = 10 + 'px';
startLeft.style.paddingRight = 11 + 'px';
startLeft.style.display = 'inline-block';
pauseLeft.style.display = 'none';

startLeft.addEventListener('click', startLeft_click);
pauseLeft.addEventListener('click', pauseLeft_click);
clearLeft.addEventListener('click', clearLeft_click);

var go = 0;
var count;
var timer;
var time;
var startButtonLeft;
var pauseButtonLeft = 0;

function timeLeft() {

	time = new Date().getTime();
	count = time - startButtonLeft + pauseButtonLeft;

	var msec = count%1000;
	var sec = Math.floor(count/1000)%60;
	var min = Math.floor(count/60000)%60;
	var hours = Math.floor(count/(60000*60))%24;

		if (msec < 10) {
			msec = '00' + msec;
		} else if (msec < 100) {
			msec = '0' + msec;
		}
		if (sec < 10) {
			sec = '0' + sec;
		}
		if (min < 10) {
			min = '0' + min;
		}
		if (hours < 10) {
			hours = '0' + hours;
		}
	watchLeft.innerHTML = hours + ':' + min + ':' + sec;
	divMsecLeft.innerHTML = msec;
	return count;
}

function startLeft_click() {

	startLeft.style.display = 'none';
	pauseLeft.style.display = 'inline-block';

	if (go == 0) {
		startButtonLeft = new Date().getTime();
		timer = setInterval(timeLeft, 1);
		go = 1;

	} else if (go == 2) {
		startButtonLeft = new Date().getTime();
		timer = setInterval(timeLeft, 1);
		go = 1;
	}
}
function pauseLeft_click() {

	startLeft.style.display = 'inline-block';
	pauseLeft.style.display = 'none';

	pauseButtonLeft = count;
	clearInterval(timer);
	go = 2;
}

function clearLeft_click() {
	clearInterval(timer);
	startLeft.style.display = 'inline-block';
	pauseLeft.style.display = 'none';

	count = 0;
	pauseButtonLeft = 0;
	go = 0;
	watchLeft.innerHTML = '00:00:00';
	divMsecLeft.innerHTML = '000';
}

// var watchRight = document.getElementById('watchRight');
// var divMsecRight = document.getElementById('msecRight');
// var startRight = document.getElementById('startRight');
// var stopRight = document.getElementById('stopRight');
// var splitRight = document.getElementById('splitRight');
// var resetRight = document.getElementById('resetRight');
// var divStopSplit = document.getElementById('divStopSplit');
//
// startRight.style.paddingLeft = 10 + 'px';
// startRight.style.paddingRight = 11 + 'px';
// startRight.style.display = 'inline-block';
// stopRight.style.display = 'none';
//
//
// startRight.addEventListener('click', startRight_click);
// stopRight.addEventListener('click', stopRight_click);
// splitRight.addEventListener('click', splitRight_click);
// resetRight.addEventListener('click', resetRight_click);
