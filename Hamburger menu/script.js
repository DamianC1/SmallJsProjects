const burgerBtn = document.querySelector('.burger');
const barsIco = document.querySelector('.fa-bars');
const xIco = document.querySelector('.fa-times');
const nav = document.querySelector('nav ul');

const handleNav = () => {
	burgerBtn.classList.toggle('active');
	barsIco.classList.toggle('hide');
	xIco.classList.toggle('hide');
	nav.classList.toggle('active');
};

burgerBtn.addEventListener('click', handleNav);
