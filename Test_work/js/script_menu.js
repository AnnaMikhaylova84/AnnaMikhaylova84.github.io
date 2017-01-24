// function hey() {
//   alert('hey-hey!');
// }
//
// hey();

var dropElem = document.getElementById('dropmenu');
// console.log('dropElem', dropElem);
var wrapper = document.getElementById('wrapper');
// console.log('wrapper', wrapper);
  var titleElem = dropElem.querySelector('.droplink');
  // console.log('titleElem', titleElem);
  var dropDown = dropElem.querySelector('.header_new__dropdown');
  // console.log('dropDown', dropDown);
var close = document.getElementById('close');
// console.log('close', close);

titleElem.onclick = function() {
  dropDown.classList.toggle('open');
  wrapper.classList.toggle('open');
  // console.log('dropDown after+open', dropDown);
};

close.onclick = function() {
  dropDown.classList.toggle('open');
  wrapper.classList.toggle('open');
  // console.log('dropDown after+open', dropDown);
}
