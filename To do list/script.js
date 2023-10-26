let toDoInput;
let errorInfo;
let addBtn;
let ulList;
let newToDo;
let remove;

let popup; //popup
let popupInfo; // text w popupie
let toDoToEdit; // edytowany todo
let popupInput; // input w popupie
let popupAddBtn; // przycisk "zatwierdź" w popupie
let popupCloseBtn; // przycisk "anuluj" w popupie

const main = () => {
	prepareDomElements();
	prepareDomEvents();
};
const prepareDomElements = () => {
	toDoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.toDoList ul');
	popup = document.querySelector('.popup');
	popupInfo = document.querySelector('.popup-info');
	popupInput = document.querySelector('.popup-input');
	popupAddBtn = document.querySelector('.accept');
	popupCloseBtn = document.querySelector('.cancel');
	removeToDoBtn = document.querySelector('.delete');
};
const prepareDomEvents = () => {
	addBtn.addEventListener('click', addNewToDo);
	ulList.addEventListener('click', checkClick);
	popupCloseBtn.addEventListener('click', cancelPopup);
	popupAddBtn.addEventListener('click', changeTodoText);
	toDoInput.addEventListener('keyup', enterKeyCheck);
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
		editTodo(e);
	} else if (e.target.matches('.delete')) {
		deleteToDo(e);
	}
};

const editTodo = (e) => {
	toDoToEdit = e.target.closest('li');
	popupInput.value = toDoToEdit.firstChild.textContent;
	popup.style.display = 'flex';
};

const changeTodoText = () => {
	if (popupInput.value !== '') {
		toDoToEdit.firstChild.textContent = popupInput.value;
		popup.style.display = 'none';
		popupInfo.textContent = '';
	} else {
		popupInfo.textContent = 'Podaj wartość';
	}
};

const deleteToDo = (e) => {
	e.target.closest('li').remove();

	const allTodos = ulList.querySelectorAll('li');

	if (allTodos.length === 0) {
		errorInfo.textContent = 'Brak zadań na liście';
	}
};

const enterKeyCheck = (e) => {
	if (e.key === 'Enter') {
		addNewToDo();
	}
};

const cancelPopup = () => {
	popup.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', main);
