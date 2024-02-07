//BUTTONS
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const infoBtn = document.querySelector('.fa-question');
const closeModalBtn = document.querySelector('.close');

const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');
const modalShadow = document.querySelector('.modal-shadow');

let countTime;
let minutes = 0;
let seconds = 0;
let timesArr = [];

// ZMIANA KOLORÓW
const colorBtn = document.querySelector('.fa-palette');
const colorPalette = document.querySelector('.color-palette');
const redColor = document.querySelector('.red');
const greenColor = document.querySelector('.green');
const blueColor = document.querySelector('.blue');
let root = document.documentElement;

const handleStart = () => {
	clearInterval(countTime);
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopwatch.textContent = `${minutes}:00`;
		}
	}, 1000);
};

const handleStop = () => {
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible';
		timesArr.push(stopwatch.textContent);
	}

	clearStuff();
};

const handlePause = () => {
	clearInterval(countTime);
};

const handleReset = () => {
	time.style.visibility = 'hidden';
	timesArr = [];
	clearStuff();
};

const clearStuff = () => {
	clearInterval(countTime);
	stopwatch.textContent = '0:00';
	timeList.textContent = '';
	seconds = 0;
	minutes = 0;
};

const showHistory = () => {
	timeList.textContent = '';

	let num = 1;

	timesArr.forEach(time => {
		const newTime = document.createElement('li');
		newTime.innerHTML = `Pomiar nr ${num} <span>${time}</span>`;
		timeList.appendChild(newTime);
		num++;
	});
};

const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block';
	} else {
		modalShadow.style.display = 'none';
	}
	modalShadow.classList.toggle('modal-animation');
};

//ZMIANA KOLORÓW
const showPalette = () => {
	colorPalette.classList.toggle('palette-animation');
};
const redColorChange = () => {
	root.style.setProperty('--first-color', '#fa1006');
	root.style.setProperty('--first-shadow-color', '#e2241a');
};
const greenColorChange = () => {
	root.style.setProperty('--first-color', 'green');
	root.style.setProperty('--first-shadow-color', '#016901');
};
const blueColorChange = () => {
	root.style.setProperty('--first-color', 'royalblue');
	root.style.setProperty('--first-shadow-color', '#3d5fc4');
};

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);
infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', e => (e.target === modalShadow ? showModal() : false));

//ZMIANA KOLORÓW PRZYCISKI
colorBtn.addEventListener('click', showPalette);
redColor.addEventListener('click', redColorChange);
greenColor.addEventListener('click', greenColorChange);
blueColor.addEventListener('click', blueColorChange);
