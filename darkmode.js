const body = document.querySelector('body');
const i = document.querySelector('#mode');

i.addEventListener('click', function () {
	this.classList.toggle('fa-sun');
	if (this.classList.toggle('fa-moon')) {
		body.style.background = '#1a1e20';
		body.style.color = 'white';
		body.style.transition = 'ease-in-out .5s';
	} else {
		body.style.background = 'white';
		body.style.color = 'black';
		body.style.transition = 'ease-in .5s';
	}
});
