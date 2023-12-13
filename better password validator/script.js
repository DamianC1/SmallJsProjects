// INPUTS
const userName = document.querySelector('#user-name');
const userPassword = document.querySelector('#user-password');
const repeatPassword = document.querySelector('#repeat-password');
const userEmail = document.querySelector('#user-email');
// BUTTONS
const sendBtn = document.querySelector('.submit');
const clearBtn = document.querySelector('.clear');
const closeBtn = document.querySelector('.close');

// FUNCTIONS

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');
	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

sendBtn.addEventListener('click', e => {
	e.preventDefault();

	checkForm([userName, userPassword, repeatPassword, userEmail]);
});

clearBtn.addEventListener('click', e => {
	e.preventDefault();

	[userName, userPassword, repeatPassword, userEmail].forEach(el => {
		el.value = '';
	});
});
