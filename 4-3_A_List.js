function arrayToList(arr) {
	const list = {};
	list.value = arr[0];
	if (arr.length === 0) {
		list.rest = null;
	} else {
		list.rest = arrayToList(arr.slice(1));
	}
	return list;
}

const myList = arrayToList([1,2,3])
console.log(myList);

function listToArray(list) {
	const arr = [];
	makeArray(list);
	return arr;

	function makeArray(list) {
		if (list.value) arr.push(list.value);
		if (list.rest) makeArray(list.rest);
		else return arr;
	}
}

console.log(listToArray(myList));
console.log(listToArray({}));
console.log(listToArray({'notavalue': undefined}));

const prepend = (element, list) => {
	return { value: element, rest: list }
};

console.log(prepend(7, myList));

const nth = (number, list) => {
	if (number === 0) return list.value;
	else return nth(number - 1, list.rest);
};

console.log(typeof nth(3, myList));
