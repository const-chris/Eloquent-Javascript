function flatten(arr) {
	return arr.reduce((accumulator, current) => {
		return accumulator.concat(current);
	});
}

const myArr = [ [1,2], [3,4], [5,6,7] ];
console.log(flatten(myArr));
