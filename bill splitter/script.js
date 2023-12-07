//INPUTS
const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');

//INFO
const error = document.querySelector('.error');
const cost = document.querySelector('.cost');

//BUTTON
const count = document.querySelector('.count');

//FUNCTIONS
const counting = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.style.display = 'block';
	} else {
		moneyToPay = (price.value + price.value * tip.value) / people.value;
		console.log(moneyToPay);
	}
};

count.addEventListener('click', counting);
