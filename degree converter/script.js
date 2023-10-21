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
	text.textContent = `${converter.value}°C to ${farenheit.toFixed(1)}°F`;
	converter.value = '';
};

const farenheitConverter = () => {
	celsius = (converter.value - 32) / 1.8;
	text.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
	converter.value = '';
};

const degreeConvert = () => {
	if (converter.value === '') {
		text.textContent = 'Podaj wartość';
	} else {
		if (one.textContent === '°C') {
			celsiusChanger();
		} else {
			farenheitConverter();
		}
	}
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

const resetting = () => {
	text.textContent = '';
	converter.value = '';
};
//zmiana button
change.addEventListener('click', degreeChange);
//konwertuj button
conv.addEventListener('click', degreeConvert);
//reset button
reset.addEventListener('click', resetting);
