class Group {
	constructor() {
	}
	add(value) {
		if (this[value]) return;
		else this[value] = value;
	}
	delete(value) {
		if (!this[value]) return;
		else delete this[value];
	}
	has(value) {
		return this[value] ? true : false;
	}
	static from(iterable) {
		const result = new Group;
		for (let element of iterable) {
			result.add(element)
		}
		return result;
	}
}

const myGroup = new Group;
myGroup.add(2);
myGroup.add(3);
myGroup.add(4);
myGroup.add(5);
myGroup.add(5);
myGroup.delete(3);
myGroup.delete(6);
console.log(myGroup);
console.log(myGroup.has(2), myGroup.has(100));
const myArr = [1,2,3,4];
const myOtherGroup = Group.from(myArr);
console.log(myOtherGroup);
