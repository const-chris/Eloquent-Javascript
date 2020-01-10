class Group {
	constructor() {
		this.elements = [];
	}
	add(element) {
		if (!this.has(element)) {
			this.elements.push(element);
		}
	}
	delete(element) {
		this.elements = this.elements.filter(e => e !== element);
	}
	has(element) {
		return this.elements.includes(element);
	}
	static from(iterable) {
		const result = new Group;
		for (let element of iterable) {
			result.add(element)
		}
		return result;
	}
	[Symbol.iterator]() {
		return new GroupIterator(this);
	}
}

class GroupIterator {
	constructor(group) {
		this.elements = group.elements;
		this.index = 0;
	}
	next() {
		if (this.index >= this.elements.length) return {done: true};
		else {
			let value = this.elements[this.index];
			this.index++;
			return {value, done: false};
		}
	}
}

const myGroup = Group.from(['a','b','c']);
myGroup.add(1);
myGroup.add(2);
myGroup.add(3);
myGroup.add(4);
myGroup.add(5);
myGroup.add(6);
console.log(myGroup);
myGroup.delete(4);
myGroup.delete(7);
myGroup.add(3);
console.log(myGroup);
console.log(myGroup.has(1), myGroup.has(7));
for (let member of myGroup) {
	console.log(member)
};
