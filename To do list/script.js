let toDoInput;
let errorInfo;
let addBtn;
let ulList;
let newToDo;

const main = () => {
	prepareDomElements();
	prepareDomEvents();
};
const prepareDomElements = () => {
	toDoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.toDoList ul');
};
const prepareDomEvents = () => {
	addBtn.addEventListener('click', addNewToDo);
};

const addNewToDo = () => {
	if (toDoInput.value !== '') {
		newToDo = document.createElement('li');
		newToDo.textContent = toDoInput.value;
		ulList.append(newToDo);
		toDoInput.value = '';
		errorInfo.textContent = '';
	} else {
		errorInfo.textContent = 'Musisz podać wartość';
	}
};

document.addEventListener('DOMContentLoaded', main);
