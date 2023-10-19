const converter = document.querySelector('#converter');
const text = document.querySelector('.result');
const conv = document.querySelector('.conv');
const reset = document.querySelector('.reset');
const change = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let farenheit;
let celsius;

const celsiusChanger = () => {
	farenheit = converter.value * 1.8 + 32;
	text.textContent = `${converter.value}°C to ${farenheit}°F`;
};

const farenheitConverter = () => {
	celsius = ((converter.value - 32) / 2) * 1.1;
	console.log(celsius);
};

const degreeChange = () => {
	if (one.textContent === '°C' && two.textContent === '°F') {
		one.textContent = '°F';
		two.textContent = '°C';
	} else {
		one.textContent = '°C';
		two.textContent = '°F';
	}
};

change.addEventListener('click', degreeChange);
conv.addEventListener('click', celsiusChanger);
