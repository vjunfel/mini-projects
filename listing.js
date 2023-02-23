const myForm = document.querySelector('#my-form');
const myField = document.querySelector('#my-field');
const myList = document.querySelector('#my-list');

myForm.addEventListener('submit', (e) => {
	e.preventDefault();
	inputChecher();
});

function inputChecher() {
	const input = myField.value.trim();
	if (input.length !== 0) {
		inputItem(myField.value);
		myField.value = '';
		myField.focus();
	} else {
		const warn = document.querySelector('#warning');
		warn.classList.add('warn');
		setTimeout(() => {
			warn.classList.remove('warn');
			myField.value = '';
			myField.focus();
		}, 1500);
	}
}

function inputItem(x) {
	const btnDelete = `<i class="btnDelete fa-solid fa-xmark" onClick=(deleteItem(this))></i>`;
	const markup = `<li> ${x} ${btnDelete}`;
	myList.insertAdjacentHTML('beforeend', markup);
}

function deleteItem(i) {
	i.parentElement.remove();
}
