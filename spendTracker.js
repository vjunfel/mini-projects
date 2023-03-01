const myForm = document.querySelector('#my-form');
const myField = document.querySelector('#my-field');
const myList = document.querySelector('#my-list');
const btnDelete = document.querySelector('.btnDelete');
const clearAll = document.querySelector('#clear');
const filter = document.querySelector('#filter');

// Event Listener
myForm.addEventListener('submit', createItem);
myList.addEventListener('click', removeItemList);
clearAll.addEventListener('click', clearLists);
filter.addEventListener('keyup', filterItem);

function createItem(e) {
	e.preventDefault();

	const inputValue = myField.value.trim();

	if (inputValue.length !== 0) {
		const li = document.createElement('li');
		const button = createBtn('btnDelete');

		li.appendChild(document.createTextNode(inputValue));
		li.appendChild(button);
		myList.appendChild(li);
	} else {
		const warningMessage = document.querySelector('#warning');
		warningMessage.classList.add('warn');

		setTimeout(() => {
			warningMessage.classList.remove('warn');
		}, 2000);
	}

	myField.value = '';
	myField.focus();
	checkUI();
}

function createBtn(classes) {
	const button = document.createElement('button');
	button.className = classes;

	const icon = createIcon('fa fa-xmark');
	button.appendChild(icon);
	return button;
}

function createIcon(classes) {
	const icon = document.createElement('i');
	icon.className = classes;
	return icon;
}

function removeItemList(e) {
	if (e.target.parentElement.classList.contains('btnDelete')) {
		e.target.parentElement.parentElement.remove();
	}

	checkUI();
}

function clearLists() {
	while (myList.firstChild) {
		myList.firstChild.remove();
	}

	checkUI();
}

function checkUI() {
	const filter = document.querySelector('.filter-area');
	const clear = document.querySelector('.clear-items');
	const items = myList.querySelectorAll('li');

	if (items.length === 0) {
		filter.classList.add('hide');
		clear.style.display = 'none';
	} else {
		filter.classList.remove('hide');
		clear.style.display = 'block';
	}
}

function filterItem(e) {
	const filterInput = e.target.value.toLowerCase().trim();
	const itemList = myList.querySelectorAll('li');

	itemList.forEach((item) => {
		const itemName = item.firstChild.textContent.toLowerCase();

		if (itemName.indexOf(filterInput) !== -1) {
			item.style.display = 'flex';
		} else {
			item.style.display = 'none';
		}
	});
}
