function loop(value, test, update, body) {
	if (!test(value)) return;
	else {
		body(value);
		const newValue = update(value);
		loop (newValue, test, update, body);
	}
}

loop(
	0,
	(value) => value < 10,
	(value) => value + 1,
	(value) => console.log(value)
);

function cheatLoop(value, test, update, body) {
	while (test(value)) {
		body(value);
		value = update(value);
	}
}


cheatLoop(
	0,
	(value) => value < 10,
	(value) => value + 1,
	(value) => console.log(value)
);
