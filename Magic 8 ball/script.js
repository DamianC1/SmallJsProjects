// INPUT
const input = document.querySelector('.question');

//MESSAGES
const message = document.querySelector('.answer');
const errorMsg = document.querySelector('.error');

//IMG
const image = document.querySelector('img');

const answers = ['Tak', 'Nie', 'Ok'];

const pickAnswer = () => {
	const answer = answers[Math.floor(Math.random() * answers.length)];
	message.textContent = answer;
};

const animation = () => {
	if (input.value !== '') {
		image.classList.add('shake-animation');
		input.value = '';
		pickAnswer();
		errorMsg.textContent = '';
	} else {
		errorMsg.textContent = 'Musisz zadać pytanie';
	}
};

image.addEventListener('click', animation);
