/*global document*/
/*eslint no-undef: "error"*/
var button = document.querySelector('section');

var menu = document.querySelector('header');
// var menuZichtbaar = false;

// button.addEventListener('dblclick', toonMenu);

button.addEventListener('click', toggleMenu);

// function toonMenu(){
//   menu.classList.add('show');
// }

function toggleMenu() {
	menu.classList.toggle('show');
}
