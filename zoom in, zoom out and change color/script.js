const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const color = document.querySelector('.color');
const text = document.querySelector('p');

let textSize = 36;

const bigger = () => {
	if (textSize >= 54) {
		return;
	}
	textSize += 6;
	text.style.fontSize = textSize + 'px';
};

const smaller = () => {
	if (textSize <= 18) {
		return;
	}
	textSize -= 6;
	text.style.fontSize = textSize + 'px';
};

const changeColor = () => {
	const colorNumberFirst = Math.floor(Math.random() * 255);
	const colorNumberSecond = Math.floor(Math.random() * 255);
	const colorNumberThird = Math.floor(Math.random() * 255);

	text.style.color = `rgb(${colorNumberFirst},${colorNumberSecond},${colorNumberThird})`;
};

sizeUp.addEventListener('click', bigger);
sizeDown.addEventListener('click', smaller);
color.addEventListener('click', changeColor);
