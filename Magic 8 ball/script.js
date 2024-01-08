// INPUT
const input = document.querySelector('.question');

//MESSAGES
const message = document.querySelector('.answer');
const errorMsg = document.querySelector('.error');

//IMG
const image = document.querySelector('img');

const answers = ['Tak', 'Nie', 'Ok'];

const shakeBall = () => {
	image.classList.add('shake-animation');
	setTimeout(animation, 1000);
};

const animation = () => {
	if (input.value !== '') {
		pickAnswer();
		input.value = '';
		errorMsg.textContent = '';
		image.classList.remove('shake-animation');
	} else {
		errorMsg.textContent = 'Musisz zadać pytanie';
		message.textContent = '';
		image.classList.remove('shake-animation');
	}
};
const pickAnswer = () => {
	const answer = answers[Math.floor(Math.random() * answers.length)];
	message.textContent = answer;
};

image.addEventListener('click', shakeBall);
