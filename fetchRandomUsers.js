function fetchUser() {
	fetch('https://randomuser.me/api')
		.then((res) => res.json())
		.then((data) => {
			displayUser(data.results[0]);
		})
		.catch((err) => {
			err.message;
		});
}

function displayUser(user) {
	const userDisplay = document.querySelector('#user');

	if (user.gender === 'female') {
		userDisplay.style.backgroundColor = 'rebeccapurple';
		userDisplay.style.color = '#fff';
	} else {
		userDisplay.style.backgroundColor = 'steelblue';
		userDisplay.style.color = '#fff';
	}

	userDisplay.innerHTML = `
	  <div class="user">
		<img class="user-image" src="${user.picture.large}" />
		<div>
		  <p class="name"> ${user.name.first} ${user.name.last} </p>
		  <p class="email"> Email: ${user.email} </p>
		  <p class="phone"> Phone: ${user.phone} </p>
		  <p class="location"> Location: ${user.location.city} ${user.location.country}</p>
		  <p class="age"> Age: ${user.dob.age} </p>
		</div>
	</div>
	`;
}
fetchUser();

document.querySelector('#generator-btn').addEventListener('click', fetchUser);
