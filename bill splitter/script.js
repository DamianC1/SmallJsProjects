//INPUTS
const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');

//INFO
const error = document.querySelector('.error');
const cost = document.querySelector('.cost');
const costInfo = document.querySelector('.cost-info');

//BUTTON
const count = document.querySelector('.count');

//FUNCTIONS

const showBill = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.style.display = 'block';
		costInfo.style.display = 'none';
	} else {
		countBill();
	}
};

const countBill = () => {
	const newPrice = parseFloat(price.value);
	const newPeople = parseInt(people.value);
	const newTip = parseFloat(tip.value);

	const toPay = (newPrice + newPrice * newTip) / newPeople;

	cost.textContent = toPay.toFixed(2);
	costInfo.style.display = 'block';
	error.style.display = 'none';
};

count.addEventListener('click', showBill);
