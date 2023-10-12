const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const text = document.querySelector('p');

let textSize = 36;

const bigger = () => {
	textSize += 6;
	text.style.fontSize = textSize + 'px';
};

const smaller = () => {
	textSize -= 6;
	text.style.fontSize = textSize + 'px';
};

const changeColor = () => {
	text.style.color = 'gold';
};

sizeUp.addEventListener('click', bigger);
sizeDown.addEventListener('click', smaller);
color.addEventListener('click', changeColor);
