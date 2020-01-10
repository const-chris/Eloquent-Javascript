function reverseArray(arr) {
	let result = [];
	for (let element of arr) {
		result.unshift(element);
	}
	return result;
}

console.log(reverseArray([1,2,3,4]));

function reverseArrayInPlace(arr) {
	const lastIndex = arr.length - 1;
	for (let i = 0, j = lastIndex; i <= lastIndex / 2; i++, j--) {
		[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
	}
	return arr;
}

const myArr = [1,2,3,4,5,6];
reverseArrayInPlace(myArr);
console.log(myArr);
