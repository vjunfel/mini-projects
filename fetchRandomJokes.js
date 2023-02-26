const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#joke-btn');

document.addEventListener('DOMContentLoaded', getRandomJokes);
jokeBtn.addEventListener('click', getRandomJokes);

function getRandomJokes() {
	fetch('https://api.chucknorris.io/jokes/random')
		.then((res) => res.json())
		.then((data) => {
			joke.innerHTML = data.value;
		})
		.catch((error) => {
			const markup = `<p>Something Went Wrong</p>`;
			document
				.querySelector('#joke')
				.insertAdjacentHTML('beforeend', markup);
			console.log(error.message);
		});
}

// const intervalID = setInterval(getRandomJokes, 6500);

// function stopInterval() {
// 	clearInterval(intervalID);
// }
