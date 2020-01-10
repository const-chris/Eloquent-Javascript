const range = (start, end, step = 1) => {
	let result = [];
	if (start <= end && step > 0) {
		for (let next = start; next <= end; next += step) {
			result.push(next);
		}
	} else if (start >= end && step < 0) {
		for (let next = start; next >= end; next += step) {
			result.push(next);
		}
	} else {
		console.log('step not in range');
		return
	}
	return result;
};

console.log(range(1, 10, 2));
console.log(range(5,2,-1));
console.log(range(2,2,-5));

const sum = (arr) => {
	let total = 0;
	for (let element of arr) {
		total += element;
	}
	return total;
};

console.log(sum(range(1,10)));
