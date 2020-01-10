function every(arr, predicate) {
	for (let element of arr) {
		if (!predicate(element)) return false;
	}
	return true;
}

function everyV2(arr, predicate) {
	return arr.some((element) => !predicate(element)) ? false : true;
}

const myArr = [1,2,3];
console.log(every(myArr, (x) => x > 0));
console.log(every(myArr, (x) => x > 1));
console.log(everyV2(myArr, (x) => x > 0));
console.log(everyV2(myArr, (x) => x > 1));
