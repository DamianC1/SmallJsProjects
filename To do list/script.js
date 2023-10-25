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
	ulList.addEventListener('click', checkClick);
};

const addNewToDo = () => {
	if (toDoInput.value !== '') {
		newToDo = document.createElement('li');
		newToDo.textContent = toDoInput.value;
		createToolArea();
		ulList.append(newToDo);
		toDoInput.value = '';
		errorInfo.textContent = '';
	} else {
		errorInfo.textContent = 'Musisz podać wartość';
	}
};

const createToolArea = () => {
	const toolsWrapper = document.createElement('div');
	toolsWrapper.classList.add('tools');

	const completeBtn = document.createElement('button');
	completeBtn.classList.add('complete');
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';

	const editBtn = document.createElement('button');
	editBtn.classList.add('edit');
	editBtn.textContent = 'EDIT';

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete');
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	toolsWrapper.append(completeBtn, editBtn, deleteBtn);
	newToDo.append(toolsWrapper);
};

const checkClick = (e) => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.classList.toggle('completed');
	} else if (e.target.matches('.edit')) {
		console.log('edit');
	} else if (e.target.matches('.delete')) {
		console.log('delete');
	}
};

document.addEventListener('DOMContentLoaded', main);
