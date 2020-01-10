function cons(a, rest) {
	return { head: a, tail: rest };
}

function arrayFromList(list) {
	let arr = [];
	for (let v = list.head; list.tail; list = list.tail) {
		arr.push(v);
	}
	return arr;
}

module.exports = { cons, arrayFromList };
