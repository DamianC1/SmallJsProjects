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

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się minimum z ${min} znaków `);
	}
};

const passwordWalidator = (passwrd1, passwrd2) => {
	if (passwrd1.value !== passwrd2.value) {
		showError(passwrd2, 'Hasła do siebie nie pasują');
	}
};

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
	checkLength(userName, 3);
	checkLength(userPassword, 8);
	passwordWalidator(userPassword, repeatPassword);
});

clearBtn.addEventListener('click', e => {
	e.preventDefault();

	[userName, userPassword, repeatPassword, userEmail].forEach(el => {
		el.value = '';
	});
});