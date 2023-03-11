let a = true;

// Callback function
function myCallBack(response, reject) {
	if (a == true) {
		response('Response is Accepted');
	} else {
		reject('Rejected request');
	}
}

myCallBack(
	(message) => {
		console.log('Response is true ' + message);
	},
	(error) => {
		console.log('Response is false ' + error);
	}
);

// Promises
function myPromise() {
	return new Promise((resolve, reject) => {
		if (a == true) {
			resolve('Response is Accepted');
		} else {
			reject('Rejected request');
		}
	});
}
myPromise()
	.then((message) => {
		console.log('Response is true ' + message);
	})
	.catch((error) => {
		console.log('Response is false ' + error);
	});

// Promise All
const data1 = new Promise((res, rej) => {
	res('Data1');
});
const data2 = new Promise((res, rej) => {
	res('Data2');
});
const data3 = new Promise((res, rej) => {
	res('Data3');
});

Promise.all([data1, data2, data3]).then((message) => {
	// console.log(message);
	// console.log([1].message);
});

function print() {
	const p = 1;
	console.log(this);
}
print();

const arrow = () => {
	const p = 1;
	console.log(this);
};
arrow();
